import axios from '@p/axios';
import { api } from './routes';

export default {
  get: {
    current: async () => {
      return await axios
        .post(api.notification.get, {
          type: 'current',
        })
        .then((response) => {
          if (
            response.status == 200 &&
            response.data &&
            response.data.success
          ) {
            return {
              success: true,
              data: response.data,
              error: null,
            };
          } else {
            return {
              success: false,
              data: null,
              error: null,
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
    },
    all: async () => {
      return await axios
        .post(api.notification.get, {
          type: 'all',
        })
        .then((response) => {
          if (
            response.status == 200 &&
            response.data &&
            response.data.success
          ) {
            return {
              success: true,
              data: response.data,
              error: null,
            };
          } else {
            return {
              success: false,
              data: null,
              error: null,
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
    },
  },
};
