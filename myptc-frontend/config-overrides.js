const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireMobX = require('react-app-rewire-mobx');
const rewireEslint = require('react-app-rewire-eslint');
const path = require('path');
const theme = require('./theme');

const appSrc = path.resolve('./src');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: theme
  })(config, env);
  config = rewireMobX(config, env);
  config = rewireEslint(config, env);
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '~': appSrc
    }
  };
  console.log(config);
  return config;
};
