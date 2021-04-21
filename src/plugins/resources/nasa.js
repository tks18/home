import axios from '@p/axios';
import { api, utils } from '@p/backend';
import { generate_backend_hash } from '@p/crypto';

export default async () => {
  const resp = await axios
    .post(
      api.routes.externals.nasa.apod,
      {},
      {
        headers: utils.headers(generate_backend_hash()),
      },
    )
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        return {
          success: true,
          data: response.data,
        };
      }
      return {
        success: false,
        data: null,
      };
    })
    .catch((error) => ({
      success: false,
      data: null,
      error,
    }));
  return resp;
};
