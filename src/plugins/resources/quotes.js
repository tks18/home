import axios from '@p/axios';

let api = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

export const breakingBad = async () => {
  return await axios
    .get(api)
    .then((response) => {
      if (response.status == 200 && response.data) {
        return {
          success: true,
          data: response.data,
        };
      } else {
        return {
          success: false,
          data: null,
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
};
