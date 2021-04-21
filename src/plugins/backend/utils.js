import axios from '@p/axios';
import { generate_backend_hash } from '@p/crypto';

export const headers = (hash_obj) => ({
  secure_hash: hash_obj.hash,
  requested_at: hash_obj.at,
});

export const make_request = async (options) => {
  const response = await axios
    .post(options.url, options.postData ? options.postData : {}, {
      headers: headers(generate_backend_hash()),
    })
    .then((resp) => {
      if (resp.status === 200 && resp.data) {
        return {
          success: true,
          data: response.data,
          error: null,
          timing: response.responsetime,
        };
      }
      return {
        success: false,
        data: null,
        error: 'Error Fetching Request',
        timing: response.responsetime,
      };
    })
    .catch((err) => ({
      success: false,
      data: null,
      error: err,
      timing: 0,
    }));
  return response;
};
