import axios from '@p/axios';
import { api } from './routes';

export default {
  get: async () => {
    return await axios
      .post(api.stories.get)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  set: async (storyData) => {
    return await axios
      .post(api.stories.set, storyData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
