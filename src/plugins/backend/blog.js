import { make_request as requester } from './utils';
import { api } from './routes';

export default {
  get: async (store) => {
    const resp = await requester({
      url: api.blog.get,
      store,
    });
    return resp;
  },
  set: async (postData, store) => {
    const resp = await requester({
      url: api.blog.set,
      postData,
      store,
    });
    return resp;
  },
};
