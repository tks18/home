import axios from '@p/axios';
import { api as backend } from '@p/backend/routes';

let api = backend.google.youtube;

export async function channel_data(channel) {
  let id = channel;
  return await axios
    .post(api.channel_data, {
      channel_id: id,
    })
    .then((response) => {
      if (response.status == 200 && response.data && response.data.success) {
        return {
          success: true,
          error: null,
          data: response.data.data,
        };
      } else {
        return {
          success: false,
          error: 'Response Failed to Fetch Data',
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

export async function videos() {
  return await axios
    .post(api.videos)
    .then((response) => {
      if (response.status == 200 && response.data && response.data.success) {
        return {
          success: true,
          error: null,
          data: response.data.data,
        };
      } else {
        return {
          success: false,
          error: 'Response Failed to Fetch Data',
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
