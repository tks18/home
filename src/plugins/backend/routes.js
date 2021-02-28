let isProd = !(process.env.NODE_ENV == 'development');
export const backend = isProd
  ? 'https://api.shaaan.tk/'
  : 'http://localhost:3000/';

export const api = {
  blog: {
    get: backend + 'blog/get',
    set: backend + 'blog/set',
    delete: backend + 'blog/delete',
  },
  notification: {
    get: backend + 'notification/get',
    set: backend + 'notification/set',
  },
  stories: {
    get: backend + 'stories/get',
    set: backend + 'stories/set',
  },
  gallery: {
    get: backend + 'gallery/get',
  },
  externals: {
    nasa: {
      apod: backend + 'externals/nasa/apod',
    },
  },
};
