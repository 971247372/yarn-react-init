const getEnv = require('../config/env');
const config = getEnv();

export const CTX = config.CTX;

export const noauth = config.NOAUTH === 'true';

export const isDev = config.NODE_ENV === 'development';
export const isProd = config.NODE_ENV === 'production';

export default config;
