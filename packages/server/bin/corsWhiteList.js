// @flow

const { PUBLIC_URL } = process.env;
const whitelist: Array<string> = ['http://localhost:3000', PUBLIC_URL];

export default {
  origin(origin: string, callback: Function) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
