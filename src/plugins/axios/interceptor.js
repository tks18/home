import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use((config) => {
  const conf = config;
  conf.meta = config.meta || {};
  conf.meta.requestStartedAt = new Date().getTime();
  return conf;
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
