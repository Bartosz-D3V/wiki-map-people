// @flow

import express from 'express';
import https from 'https';

import getPeople from '../util/getPeople/getPeople';
import getFetchURL from '../util/getFetchURL/getFetchURL';
import formatWikiResponse from '../util/formatWikiResponse/formatWikiResponse';

const router = express.Router();

/* GET people listing by nationality. */
router.get('/:country', (req, res) => {
  const { country } = req.params;
  const query = getPeople(country);
  const fetchURL = getFetchURL(query);

  let data = '';
  https.get(fetchURL, response => {
    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      res
        .status(200)
        .set('Content-Type', 'application/json')
        .send(formatWikiResponse(JSON.parse(data)));
    });

    response.on('error', err => {
      res.send(err).status(500);
    });
  });
});

export default router;
