import axios from '@p/axios';
import { api } from './routes';

export default {
  get: async () => {
    return await axios
      .post(api.gallery.get)
      .then((response) => {
        if (response.status == 200 && response.data) {
          return {
            success: true,
            data: response.data,
            error: null,
          };
        } else {
          return {
            success: false,
            data: null,
            error: 'Response Failed',
          };
        }
      })
      .catch((err) => {
        return {
          success: false,
          error: err,
          data: null,
        };
      });
  },
};
