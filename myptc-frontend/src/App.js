import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { LocaleProvider } from 'antd';
import { Provider } from 'mobx-react';
// Import and init i18n messages
import config, { isDev } from './config';
import _models from './models';
import Routes from './routes';

if (isDev) {
  window.store = _models;
}

class App extends Component {
  render() {
    return (
      <Provider {..._models}>
        <LocaleProvider locale={require('antd/lib/locale-provider/zh_CN')}>
          <div>
            <Helmet titleTemplate="%s" defaultTitle={config.REACT_APP_TITLE} />
            <Routes />
          </div>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;

export const models = { ..._models };
