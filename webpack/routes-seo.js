const routes = [
  {
    path: '/',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 1,
    changefreq: 'weekly',
  },
  {
    path: '/blog',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.9,
    changefreq: 'daily',
  },
  {
    path: '/careers',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/gallery',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/about/me',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/about/project',
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.7,
    changefreq: 'weekly',
  },
];

module.exports = routes;
