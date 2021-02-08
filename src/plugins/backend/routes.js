let isProd = !(process.env.NODE_ENV == 'development');
export const backend = isProd
  ? 'https://api.shaaan.tk/'
  : 'http://localhost:3000/';

export const api = {
  blog: {
    get: backend + 'blog/get',
    set: backend + 'blog/set',
  },
  stories: {
    get: backend + 'stories/get',
    set: backend + 'stories/set',
  },
};
