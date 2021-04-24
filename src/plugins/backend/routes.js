export const backend = process.env.VUE_APP_BACKEND;

export const api = {
  blog: {
    get: `${backend}blog/get`,
    set: `${backend}blog/set`,
    delete: `${backend}blog/delete`,
  },
  notification: {
    get: `${backend}notification/get`,
    set: `${backend}notification/set`,
  },
  stories: {
    get: `${backend}stories/get`,
    set: `${backend}stories/set`,
  },
  gallery: {
    get: `${backend}gallery/get`,
  },
  google: {
    youtube: {
      videos: `${backend}google/youtube/videos`,
      channel_data: `${backend}google/youtube/channel-data`,
    },
  },
  github: {
    repo: {
      list: `${backend}github/repo/list`,
      data: `${backend}github/repo/data`,
      topics: `${backend}github/repo/topics`,
      contents: `${backend}github/repo/contents`,
      branches: `${backend}github/repo/branches`,
      commits: `${backend}github/repo/commits`,
    },
  },
};
