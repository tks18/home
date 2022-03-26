/* eslint-disable */

const _import = require('@/libs/util.import.' + process.env.NODE_ENV);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: _import('home'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: _import('blog'),
  },
  {
    path: '/careers',
    name: 'Careers',
    component: _import('careers'),
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: _import('gallery'),
  },
  {
    path: '/about',
    name: 'About',
    component: _import('about'),
  },
  {
    path: '/about/me',
    name: 'About-Me',
    component: _import('about/me'),
  },
  {
    path: '/about/project',
    name: 'About-Project',
    component: _import('about/project'),
  },
];

export default routes;
