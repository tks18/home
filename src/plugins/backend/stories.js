import { make_request as requester } from './utils';
import { api } from './routes';

export default {
  get: async (store) => {
    const resp = await requester({
      url: api.stories.get,
      postData: {
        type: 'current',
      },
      store,
    });
    return resp;
  },
  set: async (storyData, store) => {
    const resp = await requester({
      url: api.stories.set,
      postData: storyData,
      store,
    });
    return resp;
  },
};
