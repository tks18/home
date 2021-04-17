import axios from '@p/axios';
import { api } from './routes';

export default {
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
