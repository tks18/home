import { api, axios } from '@p/backend';

export default async () => {
  const resp = await axios
    .post(api.routes.externals.nasa.apod)
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        return {
          success: true,
          data: response.data,
        };
      }
      return {
        success: false,
        data: null,
      };
    })
    .catch((error) => ({
      success: false,
      data: null,
      error,
    }));
  return resp;
};
