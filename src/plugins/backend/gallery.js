import { api } from './routes';
import axios from './interceptor';

export default {
  get: async () => {
    const resp = await axios
      .post(api.gallery.get)
      .then((response) => {
        if (response.status === 200 && response.data) {
          return {
            success: true,
            data: response.data.data,
            error: null,
          };
        }
        return {
          success: false,
          data: null,
          error: 'Response Failed',
        };
      })
      .catch((err) => ({
        success: false,
        error: err,
        data: null,
      }));
    return resp;
  },
};
