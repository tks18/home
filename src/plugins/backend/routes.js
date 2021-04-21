export const backend = process.env.VUE_APP_BACKEND;

export const api = {
  blog: {
    get: 'blog/get',
    set: 'blog/set',
    delete: 'blog/delete',
  },
  notification: {
    get: 'notification/get',
    set: 'notification/set',
  },
  stories: {
    get: 'stories/get',
    set: 'stories/set',
  },
  gallery: {
    get: 'gallery/get',
  },
  externals: {
    nasa: {
      apod: 'externals/nasa/apod',
    },
  },
  google: {
    youtube: {
      videos: 'google/youtube/videos',
      channel_data: 'google/youtube/channel-data',
    },
  },
  github: {
    repo: {
      list: 'github/repo/list',
      data: 'github/repo/data',
      topics: 'github/repo/topics',
      contents: 'github/repo/contents',
      branches: 'github/repo/branches',
      commits: 'github/repo/commits',
    },
  },
};
