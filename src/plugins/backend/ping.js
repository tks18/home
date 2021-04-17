import axios from '@p/axios';
import { backend } from './routes';

export default async () => {
  return await axios
    .post(backend)
    .then((response) => {
      if (response.status == 200 && response.data) {
        return {
          success: true,
          timing: response.responsetime,
        };
      } else {
        return {
          success: false,
          timing: response.responsetime,
        };
      }
    })
    .catch((error) => {
      return {
        data: error,
        success: false,
      };
    });
};
