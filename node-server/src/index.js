/**
 * @Author: vicky
 * @Date:   2017-08-02 19:19:36
 * @Last modified by:   vicky
 * @Last modified time: 2017-08-17 10:59:05
 */
import 'babel-polyfill';
import Express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import compression from 'compression';
import path from 'path';
import http from 'http';
import morgan from 'morgan';
import moment from 'moment';
import lodash from 'lodash';
import ip from 'ip';

import config, { isDev, CTX } from './config';
import { init as passportInit } from './passport';
import domain from './middleware/domain';

import initializeDb from './db';
import registerController from './controller';
import registerProxy from './proxy';
import render from './render';
import pkg from '../package.json';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', reason => {
  console.error(reason);
});

process.on('uncaughtException', err => {
  console.error(`Caught exception: ${err}`);
  console.error(`exception stack: ${err.stack}`);
});

const app = new Express();
if (!isDev) {
  // user ejs for view template
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.set('views', path.resolve(__dirname, '..', 'build'));
  morgan.token('realclfdate', () =>
    moment()
      .utcOffset(8)
      .format('YYYY-MM-DD HH:mm:ss.SSS'));
  app.use(morgan(':remote-addr - :remote-user [:realclfdate] ":method :url HTTP/:http-version" :status :res[content-length]'));
} else {
  app.use(morgan('dev'));
}

initializeDb(async args => {
  const sessionConfig = {
    secret: 'lean-bi rule!!!!',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 60 minutes
  };
  if (args.mongoDB) {
    console.log('🌟 🌟 🌟 🌟  use mongoDB to store session 🌟 🌟 🌟 🌟');
    const MongoStore = require('connect-mongo')(session); // eslint-disable-line
    app.use(session({
      ...sessionConfig,
      store: new MongoStore({ mongooseConnection: args.mongoDB })
    }));
  } else {
    app.use(session(sessionConfig));
  }
  app.use(compression());

  // 静态资源只在非开发环境下设置
  if (!isDev) {
    // 静态资源打包目录 build/
    app.use(CTX || '/', favicon(path.join(__dirname, '..', 'build', 'favicon.ico')));
    // 静态资源
    app.use(CTX || '/', Express.static(path.join(__dirname, '..', 'build')));
  }

  app.use(bodyParser.json({ limit: '1mb' }));
  app.use(domain);

  // passport
  await passportInit(app, args);

  const ctxRouter = Express.Router(); // eslint-disable-line
  app.use(CTX || '/', ctxRouter);
  // server route
  registerController(ctxRouter, args);

  // proxy
  registerProxy(ctxRouter, app);

  // xhr error handlers
  app.use((err, req, res, next) => {
    console.log(err);
    if (req.xhr) {
      res.status(err.status || 500);
      res.json({
        message: lodash.isError(err) ? err.message : err.error_message || 'Unknown Error.'
      });
    } else if (err) {
      switch (err.status) {
        case 401:
          res.redirect(`${CTX}/unauthorized`);
          break;
        default:
      }
      res.status(err.status || 500).end(err.message);
    } else {
      next();
    }
  });

  // render
  render(ctxRouter);

  const server = http.createServer(app);
  // 服务启动端口
  // 生成环境使用配置文件中的端口设置
  const port = config.PORT;
  if (port) {
    server.listen(port, err => {
      if (err) {
        console.error(err);
      }
      const apiHost = config.API_HOST === 'localhost' ? ip.address() : config.API_HOST;
      const host = ip.address();
      console.info(
        '----\n==> ✅  %s is running, talking to API server on http://%s:%s.',
        config.APP_TITLE,
        apiHost,
        config.API_PORT
      );
      console.info('==> 💻  Open http://%s:%s in a browser to view the app.', host, port);
      console.info('==> 🔖  Version: ', pkg.version);
      console.info('==> .......................................... <==');
    });
  } else {
    console.error('==>     ERROR: No PORT environment variable has been specified');
  }
});
