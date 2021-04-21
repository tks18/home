import axios from '@p/axios';
import { generate_backend_hash } from '@p/crypto';
import { utils } from '@p/backend';
import { backend } from './routes';

export default async () => {
  const resp = await axios
    .post(
      backend,
      {},
      {
        headers: utils.headers(generate_backend_hash()),
      },
    )
    .then((response) => {
      if (response.status === 200 && response.data) {
        return {
          success: true,
          timing: response.responsetime,
        };
      }
      return {
        success: false,
        timing: response.responsetime,
      };
    })
    .catch((error) => ({
      data: error,
      success: false,
    }));
  return resp;
};
