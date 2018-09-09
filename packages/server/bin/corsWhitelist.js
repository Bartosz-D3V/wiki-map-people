// @flow

const whitelist: Array<string> = ['http://localhost:3000'];

export default {
  origin: function(origin: string, callback: Function) {
    console.log(origin);
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
