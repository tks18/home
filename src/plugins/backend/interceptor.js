import axios from 'axios';
import { calculate_resp_ms } from '@p/axios';
import { generate_backend_hash } from '@p/crypto';
import headers from './utils';
import { backend } from './routes';

// console.log(api);
const instance = axios.create({
  baseURL: backend,
  headers: headers(generate_backend_hash()),
});

instance.interceptors.request.use((config) => {
  const conf = config;
  conf.meta = config.meta || {};
  conf.meta.requestStartedAt = new Date().getTime();
  return conf;
});

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
