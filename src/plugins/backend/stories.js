import axios from '@p/axios';
import { api } from './routes';

export default {
  get: async () => {
    const resp = await axios
      .post(api.stories.get)
      .then((response) => response.data)
      .catch((err) => err);
    return resp;
  },
  set: async (storyData) => {
    const resp = await axios
      .post(api.stories.set, storyData)
      .then((response) => response)
      .catch((err) => err);
    return resp;
  }
};
