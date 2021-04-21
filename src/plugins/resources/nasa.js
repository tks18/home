import { api, requester } from '@p/backend';

export default async () => {
  const resp = await requester({
    url: api.routes.externals.nasa.apod,
  });
  return resp;
};
