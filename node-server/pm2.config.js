module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'MY-PTC',
      script: './lib/index.js',
      exec_mode: 'cluster',
      watch: false,
      env: {
        COMMON_VARIABLE: 'true',
        NODE_ENV: 'production'
      }
    }
  ]
};
