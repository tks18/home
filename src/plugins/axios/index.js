import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use((config) => {
  const conf = config;
  conf.meta = config.meta || {};
  conf.meta.requestStartedAt = new Date().getTime();
  return conf;
});

export const calculate_resp_ms = (response) => {
  const start = response.config.meta.requestStartedAt;
  const end = new Date().getTime();
  response.config.meta.requestEndedAt = end;
  const milliseconds = end - start;
  response.responsetime = milliseconds;
  return response;
};

instance.interceptors.response.use(
  (response) => {
    const modified_resp = calculate_resp_ms(response);
    return modified_resp;
  },
  (response) => {
    const modified_resp = calculate_resp_ms(response);
    return modified_resp;
  },
);

export default instance;
