import { make_request as requester } from './utils';
import { backend } from './routes';

export default async () => {
  const resp = await requester({
    url: backend,
    postData: {
      type: 'current',
    },
  });
  if (resp.success) {
    return {
      success: true,
      timing: resp.timing,
    };
  }
  return {
    success: false,
    timing: resp.timing,
  };
};
