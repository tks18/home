import { api } from './routes';
import axios from './interceptor';

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
