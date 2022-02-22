import { makeRequest as requester } from './utils';
import { api } from './routes';

export default {
  get: {
    current: async (store) => {
      const resp = await requester({
        url: api.notification.get,
        postData: {
          type: 'current',
        },
        store,
      });
      return resp;
    },
    all: async () => {
      const resp = await requester({
        url: api.notification.get,
        postData: {
          type: 'all',
        },
      });
      return resp;
    },
  },
};
