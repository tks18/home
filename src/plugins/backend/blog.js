import axios from '@p/axios';
import { generate_backend_hash } from '@p/crypto';
import { utils } from '@p/backend';
import { api } from './routes';

export default {
  get: async () => {
    const resp = await axios
      .post(
        api.blog.get,
        {},
        {
          headers: utils.headers(generate_backend_hash()),
        },
      )
      .then((response) => response)
      .catch((err) => err);
    return resp;
  },
  set: async (postData) => {
    const resp = await axios
      .post(api.blog.set, postData, {
        headers: utils.headers(generate_backend_hash()),
      })
      .then((response) => response)
      .catch((err) => err);
    return resp;
  },
};
