const _import = require(`@/libs/util.import.${process.env.NODE_ENV}`);

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
    path: '/about-this-project',
    name: 'This-project',
    component: _import('this-project'),
  },
];

export default routes;
