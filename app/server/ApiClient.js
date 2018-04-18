import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { omitBy } from 'lodash';
import { remote } from 'electron';
import dotenv from 'dotenv';

const { parsed: config } = dotenv.config();
const methods = ['get', 'post', 'put', 'patch', 'delete'];

const fileName = 'config.json';
const configFilePath = path.join(remote.app.getPath('userData'), fileName);

let conf;
if (fs.existsSync(configFilePath)) {
  conf = JSON.parse(fs.readFileSync(configFilePath));
}

const api = axios.create({
  baseURL: conf ? `http://${conf.HOST}:${conf.PORT}${conf.CTX}` : 'http://120.55.44.245:8088/api'
});
api.interceptors.response.use(
  response => response.data,
  error => {
    let err = {};
    if (error.response) {
      const { config: cfg = {} } = error.response;
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      const e = typeof error.response.data == 'string'
        ? { error_message: error.response.data }
        : error.response.data;
      err = {
        ...e,
        status: error.response.status,
        url: cfg.url || ''
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      err = error;
    }
    console.log('api calling fail', err);
    // if (err.status === 401) {
    //   // Unauthorized
    //   // redirect to login
    //   window.location = `${CTX}/login`;
    // }
    return Promise.reject(err);
  }
);

function formatUrl(path) {
  const isAbsolutePath = /^http+/.test(path);
  if (isAbsolutePath) {
    return path;
  }
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  // Prepend `/backend` to relative URL, to proxy to API server.
  return adjustedPath;
}

export default class ApiClient {
  constructor() {
    methods.forEach(
      method => {
        this[method] = (path, { params, data, headers = {}, ...others } = {}) => {
          const conf = {
            ...others,
            url: formatUrl(path),
            method,
            headers: {
              ...this.headers,
              ...headers,
              withCredentials: true, // use cookie
              'X-Requested-With': 'XMLHttpRequest' // xhr
            },
            params: this.params || {}
          };
          if (params) {
            conf.params = {
              ...conf.params,
              ...params
            };
          }

          if (data) {
            conf.data = data;
          }
          conf.headers = omitBy(conf.headers, v => typeof v == 'undefined');
          return api.request(conf);
        };
      }
    );

    this.setHeaders = this.setHeaders.bind(this);
    this.headers = {};
  }

  setHeaders(headers) {
    this.headers = headers;
    if (headers['X-LEANBI-NOAUTH']) {
      this.params = {
        noauth: true,
        noauth_user: headers['X-LEANBI-NOAUTH-USER']
      };
    }
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  empty() {}
}
