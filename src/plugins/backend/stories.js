import axios from '@p/axios';
import { generate_backend_hash } from '@p/crypto';
import { utils } from '@p/backend';
import { api } from './routes';

export default {
  get: async () => {
    const resp = await axios
      .post(
        api.stories.get,
        {},
        {
          headers: utils.headers(generate_backend_hash()),
        },
      )
      .then((response) => response.data)
      .catch((err) => err.response.data);
    return resp;
  },
  set: async (storyData) => {
    const resp = await axios
      .post(api.stories.set, storyData, {
        headers: utils.headers(generate_backend_hash()),
      })
      .then((response) => response.data)
      .catch((err) => err.response.data);
    return resp;
  },
};
