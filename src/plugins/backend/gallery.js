import axios from '@p/axios';
import { generate_backend_hash } from '@p/crypto';
import { utils } from '@p/backend';
import { api } from './routes';

export default {
  get: async () => {
    const resp = await axios
      .post(
        api.gallery.get,
        {},
        {
          headers: utils.headers(generate_backend_hash()),
        },
      )
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
