/**
 * @Author: vicky
 * @Date:   2017-07-28 14:56:02
 * @Last modified by:   vicky
 * @Last modified time: 2017-08-17 10:59:11
 */

import httpProxy from 'http-proxy';
import config from './config';
import { apiMiddleware } from './middleware/auth';

const isHttps = config.API_HTTPS == 'true';
const apiPort = config.API_PORT != 80 ? config.API_PORT : '';
const targetUrl = `http${isHttps ? 's' : ''}://${config.API_HOST}:${apiPort}`;
const proxyConfig = {
  target: targetUrl,
  ws: true
};
if (isHttps) {
  proxyConfig.agent = require('https').globalAgent;
  proxyConfig.headers = {
    host: config.API_HOST
  };
}
const proxy = httpProxy.createProxyServer(proxyConfig);

// restream parsed body before proxying
proxy.on('proxyReq', (proxyReq, req) => {
  const contentType = req.headers['content-type'] || '';
  if (req.body && !~contentType.indexOf('multipart/form-data')) {
    const bodyData = JSON.stringify(req.body);
    // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
    proxyReq.setHeader('Content-Type', 'application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    // stream the content
    proxyReq.write(bodyData);
  }
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' });
  }

  const json = { error: 'proxy_error', reason: error.message };
  res.end(JSON.stringify(json));
});

export default function (router, server) {
  const proxyHandler = (req, res) => {
    console.log('calling api: %s', targetUrl + config.API_CTX + req.path);
    proxy.web(req, res, { target: targetUrl + config.API_CTX, proxyTimeout: 1000 * 60 * 2 });
  };

  // Proxy to API server
  router.use(
    '/backend',
    /* apiMiddleware, */
    proxyHandler
  );
  router.use(
    '/manage/backend',
    /* apiMiddleware, */
    proxyHandler
  );

  router.use('/ws', (req, res) => {
    proxy.web(req, res, { target: `${targetUrl}/ws` });
  });

  server.on('upgrade', (req, socket, head) => {
    proxy.ws(req, socket, head);
  });
}
