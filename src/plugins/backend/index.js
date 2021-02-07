import axios from '@p/axios';

let isProd = !(process.env.NODE_ENV == 'development');

let backend = isProd ? 'https://api.shaaan.tk/' : 'http://localhost:3000/';
let api = {
  blog: {
    get: backend + 'blog/get',
    set: backend + 'blog/set',
  },
  stories: {
    get: backend + 'stories/get',
    set: backend + 'stories/set',
  },
};

export const routes = api;

export const pingit = async () => {
  return await axios
    .post(backend)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const blog = {
  get: async () => {
    return await axios
      .post(api.blog.get)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  set: async (postData) => {
    return await axios
      .post(api.blog.set, postData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export const stories = {
  get: async () => {
    return await axios
      .post(api.stories.get)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  set: async (storyData) => {
    return await axios
      .post(api.stories.set, storyData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
