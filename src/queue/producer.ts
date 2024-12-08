const Queue = require('bull');

const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
export const dataQueue = new Queue('data-processing', {
  redis: {
    url: REDIS_HOST,
  }
});


