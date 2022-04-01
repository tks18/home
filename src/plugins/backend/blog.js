import { makeRequest as requester } from './utils';
import { api } from './routes';

export default {
  get: async (store) => {
    const resp = await requester({
      url: api.blog.get,
      store,
    });
    return resp.data;
  },
};
