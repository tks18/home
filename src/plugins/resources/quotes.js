import axios from '@p/axios';

const api = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

export default async () => {
  const resp = await axios
    .get(api)
    .then((response) => {
      if (response.status === 200 && response.data) {
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
