import axios from '@p/axios';

let base = 'https://api.spacexdata.com/v4/';

let api = {
  launches: {
    latest: base + 'launches/latest/',
  },
};

export async function latestLaunches() {
  return await axios
    .get(api.launches.latest)
    .then((response) => {
      if (response.status == 200 && response.data) {
        return {
          success: true,
          data: response.data,
        };
      } else {
        return {
          success: false,
          error: 'Something happened',
          data: null,
        };
      }
    })
    .catch((error) => {
      return {
        success: false,
        error,
        data: null,
      };
    });
}
