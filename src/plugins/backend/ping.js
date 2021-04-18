import axios from '@p/axios';
import { backend } from './routes';

export default async () => {
  const resp = await axios
    .post(backend)
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
