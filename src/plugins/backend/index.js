import { api as routes, backend as url } from './routes';
import pingit from './ping';
import Blog from './blog';
import Stories from './stories';
import Gallery from './gallery';
import Notification from './notifications';
import headers from './utils';

export const api = {
  url,
  routes,
};
export const ping = pingit;
export const blog = Blog;
export const notifications = Notification;
export const stories = Stories;
export const gallery = Gallery;
export const utils = {
  headers,
};
