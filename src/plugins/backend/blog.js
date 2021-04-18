import axios from '@p/axios';
import { api } from './routes';

export default {
  get: async () => {
    const resp = await axios
      .post(api.blog.get)
      .then((response) => response)
      .catch((err) => err);
    return resp;
  },
  set: async (postData) => {
    const resp = await axios
      .post(api.blog.set, postData)
      .then((response) => response)
      .catch((err) => err);
    return resp;
  },
};
