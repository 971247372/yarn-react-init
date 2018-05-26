/* eslint-disable */
/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
var url = require('url')
var util = require('util')
var utils = require('./utils')
var OAuth2 = require('./oauth')

function WechatEnterpriseStrategy(options, verify) {
  options = options || {}

  if (!verify) {
    throw new Error('WechatEnterpriseStrategy requires a verify callback')
  }

  if (!options.apiClient || !options.url) {
    throw new Error('WechatEnterpriseStrategy requires a apiClient and url')
  }

  passport.Strategy.call(this)
  this.name = 'wechat-enterprise'
  this._apiClient = options.apiClient
  this._apiUrl = options.url
  this._verify = verify
  // this._oauth = new OAuth2(options.corpId)
  this._callbackURL = options.callbackURL
  this._scope = options.scope
  this._scopeSeparator = options.scopeSeparator || ' '
  this._state = options.state
  this._passReqToCallback = options.passReqToCallback
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(WechatEnterpriseStrategy, passport.Strategy)


/**
 * Authenticate request by delegating to a service provider using OAuth 2.0.
 *
 * @param {Object} req
 * @api protected
 */
WechatEnterpriseStrategy.prototype.authenticate = function(req, options) {
  options = options || {}

  var self = this
  var callbackURL = options.callbackURL || self._callbackURL
  if (callbackURL) {
    var parsed = url.parse(callbackURL)
    if (!parsed.protocol) {
      // The callback URL is relative, resolve a fully qualified URL from the
      // URL of the originating request.
      callbackURL = url.resolve(utils.originalURL(req, {
        proxy: self._trustProxy
      }), callbackURL)
    }
  }
  var params = {}

  if (req.query && req.query.code) {
    var code = req.query.code
    console.log('accept redirect back...')
    console.log('receive code ---->', code)
    try {
      self._verify(req, code, verified);
    } catch (ex) {
      return self.error(ex);
    }
  } else {
    console.log('calling api [%s] to get corpId...', self._apiUrl);
    self._apiClient.get(self._apiUrl).then(function(corpId) {
      console.log('get corpId from api ---->', corpId);
      if (!corpId) {
        return self.error(new Error('no corpId found'));
      }
      params.redirect_uri = callbackURL
      var scope = options.scope || self._scope
      if (scope) {
        params.scope = scope
      }
      params.state = options.state || self._state
      var location = new OAuth2(corpId).getAuthorizeUrl(params)
      console.log('redirect to wechat url ---->', location)
      console.log('if wechat verified, will redirect to ---->', self._callbackURL)
      self.redirect(location, 302)
    });
  }

  function verified(err, user, info) {
    if (err) { return self.error(err); }
    if (!user) { return self.fail(info); }
    self.success(user, info);
  }
}

module.exports = WechatEnterpriseStrategy
