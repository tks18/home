import { api } from './routes';
import axios from './interceptor';

export default {
  get: async () => {
    const resp = await axios
      .post(api.stories.get)
      .then((response) => response.data)
      .catch((err) => err.response.data);
    return resp;
  },
  set: async (storyData) => {
    const resp = await axios
      .post(api.stories.set, storyData)
      .then((response) => response.data)
      .catch((err) => err.response.data);
    return resp;
  },
};
