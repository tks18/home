import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use((config) => {
  config.meta = config.meta || {};
  config.meta.requestStartedAt = new Date().getTime();
  return config;
});

instance.interceptors.response.use(
  (response) => {
    const start = response.config.meta.requestStartedAt;
    const end = new Date().getTime();
    response.config.meta.requestEndedAt = end;
    const milliseconds = end - start;
    response.responsetime = milliseconds;
    return response;
  },
  (response) => {
    const start = response.config.meta.requestStartedAt;
    const end = new Date().getTime();
    response.config.meta.requestEndedAt = end;
    const milliseconds = end - start;
    response.responsetime = milliseconds;
    return response;
  },
);

export default instance;
