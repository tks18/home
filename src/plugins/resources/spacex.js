import axios from '@p/axios';

const base = 'https://api.spacexdata.com/v4/';

const api = {
  launches: {
    latest: `${base}launches/latest/`,
  },
};

export default async () => {
  const resp = await axios
    .get(api.launches.latest)
    .then((response) => {
      if (response.status === 200 && response.data) {
        return {
          success: true,
          data: response.data,
        };
      }
      return {
        success: false,
        error: 'Something happened',
        data: null,
      };
    })
    .catch((error) => ({
      success: false,
      error,
      data: null,
    }));
  return resp;
};
