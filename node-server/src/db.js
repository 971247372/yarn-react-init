/**
 * @Author: vicky
 * @Date:   2017-08-14 15:31:09
 * @Last modified by:   vicky
 * @Last modified time: 2017-08-17 10:59:18
 */

import mongoose from 'mongoose';
import axios from 'axios';
import config, { isDev } from './config';

const api = axios.create({
  baseURL: `http://${config.API_HOST}:${config.API_PORT}${config.API_CTX}`
});
api.interceptors.response.use(
  response => response.data,
  error => {
    let err = {};
    if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      err = {
        ...error.response.data,
        status: error.response.status
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      err = error;
    }
    console.log('api calling fail', err);
    return Promise.reject(err);
  }
);

export default async callback => {
  // mongo
  const dbConfig = {
    mongoUser: config.mongoUser,
    mongoPass: config.mongoPass,
    mongoHost: config.mongoHost,
    mongoPort: config.mongoPort,
    mongoDatabase: config.mongoDatabase,
  };
  let mongoDB;
  if (dbConfig.mongoHost) {
    // Connect to mongodb
    const mongoAuth = dbConfig.mongoUser && dbConfig.mongoPass ? { user: dbConfig.mongoUser, pass: dbConfig.mongoPass } : {};
    const connectMon = () => {
      const options = { server: { socketOptions: { keepAlive: 1 } }, ...mongoAuth };
      mongoose.connect(`mongodb://${dbConfig.mongoHost}:${dbConfig.mongoPort}/${dbConfig.mongoDatabase}`, options);
    };
    connectMon();
    mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console, 'connection error:'));
    mongoDB.once('open', () => {
      // we're connected!
      console.log(`connect to mongoDB at ${dbConfig.mongoHost}:${dbConfig.mongoPort}/${dbConfig.mongoDatabase}`);
      if (dbConfig.mongoUser) {
        console.log(`mongoDB user: ${dbConfig.mongoUser}`);
      }
      callback({ api, mongoDB, dbConfig });
    });
    mongoDB.on('disconnected', connectMon);
    return;
  }
  callback({ api, mongoDB, dbConfig });
};
