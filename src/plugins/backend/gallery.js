import { make_request as requester } from './utils';
import { api } from './routes';

export default {
  get: async () => {
    const resp = await requester({
      url: api.gallery.get,
    });
    if (resp.success) {
      return {
        success: true,
        data: resp.data.data,
        error: null,
      };
    }
    return {
      success: false,
      data: null,
      error: resp.error,
    };
  },
};
