import { api as backend, requester } from '@p/backend';

const api = backend.routes.google.youtube;

export async function channel_data(channel) {
  const id = channel;
  const resp = await requester({
    url: api.channel_data,
    postData: {
      channel_id: id,
    },
  });
  if (resp.data.success) {
    return {
      success: true,
      error: null,
      data: resp.data.data,
    };
  }
  return {
    success: false,
    error: resp.error,
    data: null,
  };
}

export async function videos() {
  const resp = await requester({
    url: api.videos,
  });
  if (resp.success) {
    return {
      success: true,
      error: null,
      data: resp.data.data,
    };
  }
  return {
    success: false,
    error: resp.error,
    data: null,
  };
}
