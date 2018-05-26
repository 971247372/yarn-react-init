/**
 * @Author: vicky
 * @Date:   2017-08-02 17:22:26
 * @Last modified by:   vicky
 * @Last modified time: 2017-08-17 10:59:57
 */

import passport from 'passport';
import express from 'express';

const router = express.Router(); // eslint-disable-line

export default () => {
  // do login
  router.post('/login', passport.authenticate('lean'), (req, res) => {
    const user = req.user;
    res.json(user);
  });

  // do logout
  router.all('/logout', (req, res) => {
    req.logout();
    res.json({});
  });

  router.get('/loadAuth', (req, res) => {
    const user = req.user;
    res.json(user || null);
  });

  return router;
};
