// @flow

import express from 'express';
import https from 'https';

import getPeople from '../query/getPeople';
import getFetchURL from '../query/getFetchURL';

const router = express.Router();

/* GET people listing by nationality. */
router.get('/:country', (req, res) => {
  const country = req.param('country');
  const query = getPeople(country);
  const fetchURL = getFetchURL(query);

  let data: Object;
  https.get(fetchURL, response => {
    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      res.json(data).status(200);
    });

    response.on('error', err => {
      res.send(err).status(500);
    });
  });
});

export default router;
