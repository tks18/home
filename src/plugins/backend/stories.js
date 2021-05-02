import { make_request as requester } from './utils';
import { api } from './routes';

export default {
  get: async () => {
    const resp = await requester({
      url: api.stories.get,
      postData: {
        type: 'current',
      },
    });
    return resp;
  },
  set: async (storyData) => {
    const resp = await requester({
      url: api.stories.set,
      postData: storyData,
    });
    return resp;
  },
};
