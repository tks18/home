import { api as backend, axios } from '@p/backend';

const api = backend.routes.google.youtube;

export async function channel_data(channel) {
  const id = channel;
  const resp = await axios
    .post(api.channel_data, {
      channel_id: id,
    })
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        return {
          success: true,
          error: null,
          data: response.data.data,
        };
      }
      return {
        success: false,
        error: 'Response Failed to Fetch Data',
        data: null,
      };
    })
    .catch((error) => ({
      success: false,
      error,
      data: null,
    }));
  return resp;
}

export async function videos() {
  const resp = await axios
    .post(api.videos)
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        return {
          success: true,
          error: null,
          data: response.data.data,
        };
      }
      return {
        success: false,
        error: 'Response Failed to Fetch Data',
        data: null,
      };
    })
    .catch((error) => ({
      success: false,
      error,
      data: null,
    }));
  return resp;
}
