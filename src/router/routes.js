const _import = require("@/libs/util.import." + process.env.NODE_ENV);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: _import('home'),
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
    }
  ]

export default routes;