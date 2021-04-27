import { make_request as requester } from './utils';
import { api } from './routes';

export default {
  get: async () => {
    const resp = await requester({
      url: api.blog.get,
    });
    return resp;
  },
  set: async (postData) => {
    const resp = await requester({
      url: api.blog.set,
      postData,
    });
    return resp;
  },
};
