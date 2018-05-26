import passport from 'passport';
import { isDev, CTX } from '../config';

export const init = async (app, { api }) => {
  const Strategy = require('./strategy/index').Strategy;
  const WechatEnterpriseStrategy = require('./wechat-enterprise').Strategy;
  passport.use(new Strategy((req, username, password, imageVerifyCode, done) => {
    const sessionId = req.session.id;
    let promise = Promise.resolve();
    if (!isDev && req.headers['x-leanbi-captcha'] !== 'false') {
      // not check code image while in dev
      promise = api.get('/verify/verify-code-image/verify', {
        params: {
          sessionId,
          imageVerifyCode
        }
      });
    }
    promise
      .then(() =>
        api.get('/user/login', {
          params: {
            userId: username,
            password
          }
        }))
      .then(data => {
        data.userName = username;
        console.info('User login: ', data);
        return done(null, data);
      })
      .catch(error => {
        console.log(error);
        return done(error);
      });
  }));
  passport.use(
    'lean-manage',
    new Strategy((req, username, password, imageVerifyCode, done) => {
      const sessionId = req.session.id;
      let promise = Promise.resolve();
      if (!isDev) {
        // not check code image while in dev
        promise = api.get('/verify/verify-code-image/verify', {
          params: {
            sessionId,
            imageVerifyCode
          }
        });
      }
      promise
        .then(() =>
          api.get('/user/login', {
            params: {
              userId: username,
              password,
              isAdmin: true
            }
          }))
        .then(data => {
          data.userName = username;
          console.info('User login: ', data);
          return done(null, data);
        })
        .catch(error => {
          console.log(error);
          return done(error);
        });
    })
  );

  passport.use(
    'lean-viewhub',
    new Strategy({ captchaField: 'type' }, (req, username, password, type, done) => {
      api
        .get('/user/login', {
          params: {
            userId: username,
            password,
            type
          }
        })
        .then(data => {
          data.userName = username;
          console.info('User login: ', data);
          return done(null, data);
        })
        .catch(error => {
          console.log(error);
          return done(error);
        });
    })
  );

  const wechatOptions = {
    callbackURL: `${CTX}/wechat/auth/callback`,
    state: 'STATE',
    scope: 'snsapi_base',
    apiClient: api,
    url: '/util/corpid'
  };
  passport.use(
    'wechat',
    new WechatEnterpriseStrategy(wechatOptions, (req, code, done) => {
      console.log('wechat code: ', code);
      console.log('send agentId -----> ', req.session.wechatRedirect.agentId);
      api
        .get('/user/wechat/oauth', {
          params: {
            ...req.session.wechatRedirect,
            code
          }
        })
        .then(
          data => {
            if (!data.userName && data.username) {
              data.userName = data.username;
            }
            console.info('Wechat User login: ', data);
            return done(null, data);
          },
          error => {
            console.log(error);
            return done(error);
          }
        );
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  app.use(passport.initialize());
  app.use(passport.session());
};
