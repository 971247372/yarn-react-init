const config = process.env;

export const CTX = config.PUBLIC_URL;
export const isDev = config.NODE_ENV === 'development';
export const isProd = config.NODE_ENV === 'production';
export const isTest = config.NODE_ENV === 'test';

export default config;
