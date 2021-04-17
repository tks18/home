import { api } from '@p/backend';
import axios from '@p/axios';

export async function apod() {
  return await axios
    .post(api.routes.externals.nasa.apod)
    .then((response) => {
      if (response.status == 200 && response.data && response.data.success) {
        return {
          success: true,
          data: response.data,
        };
      } else {
        return {
          success: false,
          data: null,
        };
      }
    })
    .catch((error) => {
      return {
        success: false,
        data: null,
        error,
      };
    });
}
