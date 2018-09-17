// @flow

import { $Request, $Response, $Next } from 'express';
import mcache from 'memory-cache';

const cacheTime = 1000 * 60 * 60 * 24 * 20;

export default (req: $Request, res: $Response, next: $Next) => {
  const key: string = `__express__${req.originalUrl}` || req.url;
  const cachedBody = mcache.get(key);
  if (cachedBody) {
    res.send(cachedBody);
  } else {
    res.sendResponse = res.send;
    res.send = body => {
      mcache.put(key, body, cacheTime);
      res.sendResponse(body);
    };
    next();
  }
};
