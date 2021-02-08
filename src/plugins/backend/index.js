import { api as routes, backend as url } from './routes';
import { default as pingit } from './ping';
import { default as Blog } from './blog';
import { default as Stories } from './stories';

export const api = {
  url,
  routes,
};
export const ping = pingit;
export const blog = Blog;
export const stories = Stories;
