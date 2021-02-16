import axios from '@p/axios';
import { api } from './routes';

export default {
  get: async () => {
    return await axios
      .post(api.gallery.get)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
