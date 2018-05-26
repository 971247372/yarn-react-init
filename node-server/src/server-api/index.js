/**
 * @Author: vicky
 * @Date:   2017-06-11 22:04:22
 * @Last modified by:   vicky
 * @Last modified time: 2017-08-17 11:00:00
 */

import express from 'express';
import { CTX } from '../config';

const router = express.Router(); // eslint-disable-line

export default () => {
  // do logout
  router.all('/logout', (req, res) => {
    req.logout();
    res.redirect(`${CTX}/login`);
  });

  return router;
};
