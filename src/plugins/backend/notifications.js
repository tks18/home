import axios from '@p/axios';
import { api } from './routes';

export default {
  get: {
    current: async () => {
      const resp = await axios
        .post(api.notification.get, {
          type: 'current'
        })
        .then((response) => {
          if (
            response.status === 200 &&
            response.data &&
            response.data.success
          ) {
            return {
              success: true,
              data: response.data,
              error: null
            };
          }
          return {
            success: false,
            data: null,
            error: null
          };
        })
        .catch((error) => ({
          success: false,
          data: null,
          error
        }));
      return resp;
    },
    all: async () => {
      const resp = await axios
        .post(api.notification.get, {
          type: 'all'
        })
        .then((response) => {
          if (
            response.status === 200 &&
            response.data &&
            response.data.success
          ) {
            return {
              success: true,
              data: response.data,
              error: null
            };
          }
          return {
            success: false,
            data: null,
            error: null
          };
        })
        .catch((error) => ({
          success: false,
          data: null,
          error
        }));
      return resp;
    }
  }
};
