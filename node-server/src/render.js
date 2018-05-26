/**
 * @Author: vicky
 * @Date:   2017-07-12 15:17:53
 * @Last modified by:   vicky
 * @Last modified time: 2017-08-17 10:59:15
 */

import qs from 'querystring';
import config, { CTX, noauth, isDev } from './config';

export default function (router) {
  router.use((req, res) => {
    // check auth
    // if (!req.isAuthenticated()) {
    //   return res.redirect(`${config.CTX}/login`);
    // }

    // 非开发环境渲染页面
    if (!isDev) {
      res.render('index');
    }
    // 开发环境重定向到 webpack dev server
    const url = `http://${req.hostname}:${config.DEV_PORT}${CTX}${req.path}`;
    console.log('redirect url to %s', url);
    res.redirect(url);
  });
}
