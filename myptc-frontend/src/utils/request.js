import axios from 'axios';
import { omitBy } from 'lodash';
import { notification } from 'antd';
import config from '~/config';
import { models } from '../App';

const codeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
};

const methods = ['get', 'post', 'put', 'patch', 'delete'];

axios.interceptors.response.use(
  response => ({ response: response.data }),
  error => {
    let err = {};
    if (error.response) {
      const { config: cfg = {} } = error.response;
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      const e =
        typeof error.response.data === 'string'
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
    const errortext = err.error_message || err.message || codeMessage[err.status];
    if (err.status !== 401) {
      notification.error({
        message: err.status,
        description: errortext
      });
    }
    const e = new Error(errortext);
    e.name = err.status;
    e.response = error.response;
    throw e;
  }
);

function formatUrl(path, isApi) {
  const isAbsolutePath = /^http+/.test(path);
  if (isAbsolutePath) {
    return path;
  }
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  // Prepend `/backend` to relative URL, to proxy to API server.
  return (isApi ? config.REACT_APP_API_CTX : '') + adjustedPath;
}

export class ApiClient {
  constructor() {
    methods.forEach(method => {
      this[method] = (path, {
        params, data, headers = {}, isApi = true, ...others 
      } = {}) => {
        headers = {
          ...headers
        };

        const conf = {
          ...others,
          url: formatUrl(path, isApi),
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
        conf.headers = omitBy(conf.headers, v => typeof v === 'undefined');
        return axios.request(conf).catch(e => {
          const status = e.name;
          if (status === 401 && models.session) {
            models.session.logout();
          }
          throw e;
        });
      };
    });

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

const instance = new ApiClient();

export default instance;
