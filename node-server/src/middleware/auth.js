/**
 * @Author: vicky
 * @Date:   2017-08-14 15:35:25
 * @Last modified by:   vicky
 * @Last modified time: 2017-08-14 15:35:25
 */


const regLogin = /^\/login/;
const regErrorPage = /^\/\d{3}$/;
const regMobileHome = /^\/home/;
const regWechat = /^\/wechat\/auth/;

export const middleware = (req, res, next) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    if (req.xhr) {
      const error = new Error('Unauthorized');
      error.status = 401;
      return next(error);
    }
  }
  if (req.session) {
    if (req.session.roll) {
      req.session.roll = 0;
    } else {
      req.session.roll = 1;
    }
  }
  next();
};

export const apiMiddleware = (req, res, next) => {
  const noCheckList = [];
  if (!noCheckList.includes(req.path) && (!req.isAuthenticated || !req.isAuthenticated())) {
    if (req.xhr) {
      const error = new Error('Unauthorized');
      error.status = 401;
      return next(error);
    }
  }
  if (req.session) {
    if (req.session.roll) {
      req.session.roll = 0;
    } else {
      req.session.roll = 1;
    }
  }
  next();
};
