/* eslint-disable no-param-reassign */
import axios from '@p/axios';
import { generateBackendHash } from '@p/crypto';

export const headers = (hash_obj) => ({
  secure_hash: hash_obj.hash,
  requested_at: hash_obj.at,
});

export const makeRequest = async (options) => {
  options.store.backend.progress = true;
  const response = await axios
    .post(options.url, options.postData ? options.postData : {}, {
      headers: headers(generateBackendHash()),
    })
    .then((resp) => {
      if (resp.status === 200 && resp.data) {
        options.store.backend.progress = false;
        options.store.backend.timing = resp.responsetime;
        return {
          success: true,
          data: resp.data,
          error: null,
          timing: resp.responsetime,
        };
      }
      return {
        success: false,
        data: null,
        error: 'Error Fetching Request',
        timing: resp.responsetime,
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
