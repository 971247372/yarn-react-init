/**
 * @Author: vicky
 * @Date:   2017-06-11 22:04:22
 * @Last modified by:   vicky
 * @Last modified time: 2017-08-17 10:59:59
 */

import express from 'express';

const router = express.Router(); // eslint-disable-line

export default ({ api }) => {
  router.get('/', async (req, res) => {
    const sessionId = req.session.id;
    console.log('session id --->', sessionId);
    const dataUrl = await api.get('/verify/verify-code-image', {
      params: { sessionId }
    });
    const img = new Buffer(dataUrl, 'base64'); // eslint-disable-line

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': img.length
    });
    res.end(img);
  });

  return router;
};
