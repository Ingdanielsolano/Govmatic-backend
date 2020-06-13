export const NODE_ENV = process.env.NODE_ENV;
export const IS_PRODUCTION = NODE_ENV === 'production'
export const IS_DEV = NODE_ENV === 'development'

export const APP_NAME = process.env.APP_NAME;
export const APP_HOST = process.env.APP_HOST;
export const APP_URL_PREFIX = process.env.APP_URL_PREFIX;
export const APP_PORT = process.env.APP_PORT;

export const URL_SERVER = `${APP_HOST}:${APP_PORT}/${APP_URL_PREFIX}`;


export default () => ({
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    IS_DEV: process.env.NODE_ENV === 'development',
    APP_NAME: process.env.APP_NAME,
    APP_HOST: process.env.APP_HOST,
    APP_URL_PREFIX: process.env.APP_URL_PREFIX,
    APP_PORT: process.env.APP_PORT,
    URL_SERVER: `${process.env.APP_HOST}/${process.env.APP_URL_PREFIX}`,
});