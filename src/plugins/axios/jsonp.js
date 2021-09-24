import jsonpadapter from 'axios-jsonp';
import axios from 'axios';

export default async (url) => {
  const resp = await axios({
    url,
    method: 'get',
    adapter: jsonpadapter,
  })
    .then((response) => {
      if (response && response.status === 200) {
        return {
          success: true,
          data: response.data,
          error: null,
        };
      }
      return {
        success: false,
        data: null,
        error: 'Error Fetching Response',
      };
    })
    .catch((error) => ({
      success: false,
      data: null,
      error,
    }));
  return resp;
};
