const querystring = require('querystring');

const AuthorizeUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize';
// const AccessTokenUrl = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken';
// const UserInfoUrl = 'https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo';

const OAuth = function (corpId) {
  if (!corpId) {
    throw new Error("Wechat Enterprise OAuth requires 'corpId'");
  }

  if (!(this instanceof OAuth)) {
    return new OAuth(corpId);
  }
  this._corpId = corpId;
};

OAuth.prototype.getAuthorizeUrl = function (options) {
  console.log('corpId ---->', this._corpId);
  const params = {};
  params.appid = this._corpId;
  params.redirect_uri = options.redirect_uri;
  params.response_type = 'code';
  params.scope = options.scope || 'snsapi_base';
  params.state = options.state || 'state';
  return AuthorizeUrl + '?' + querystring.stringify(params) + '#wechat_redirect';
};

module.exports = OAuth;
