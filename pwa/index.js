const icons = require('./icons');

module.exports = {
  name: 'Shan.tk',
  themeColor: '#121212',
  msTileColor: '#121212',
  workboxPluginMode: 'InjectManifest',
  appleMobileWebAppCache: 'yes',
  workboxOptions: {
    swSrc: 'src/service-worker.js',
    exclude: [
      /\.(?:png|jpg|jpeg|svg|pdf)$/,
      /_headers/,
      /_redirects/,
      /cname/,
      /netlify.toml/,
      /\.map$/,
      /manifest\.json$/,
      /service-worker\.js$/,
      /sw\.js$/,
    ],
  },
  manifestOptions: {
    name: 'Sudharshan TK',
    short_name: 'Shan.tk',
    categories: [
      'Blog',
      'Shan.tk',
      'Blogging',
      'Portfolio Website',
      'Portfolio',
    ],
    theme_color: '#121212',
    background_color: '#121212',
    display: 'standalone',
    scope: '/',
    start_url: 'https://shaaan.tk/',
    description:
      'Building Online Answers for Your Next Design Challenge. Sometimes Writes Blogs about Latest Tech Developments and Frameworks. Forgot, this is Sudharshan TK hehe xD',
    orientation: 'any',
    shortcuts: [
      {
        name: 'About',
        url: '/about',
        description: 'About Sudharshan TK',
      },
      {
        name: 'Blog',
        url: '/Blog',
        description: 'Get Latest Blog Posts from  Me.',
      },
      {
        name: 'Gallery',
        url: '/Gallery',
        description: 'Image Gallery from Sudharshan TK',
      },
      {
        name: 'Projects',
        url: '/projects',
        description: 'Currently Working Projects of Shan.tk',
      },
    ],
    screenshots: [
      {
        src: 'https://i.ibb.co/Y7BFDqN/shan-tk-1.png',
        sizes: '1365x721',
        type: 'image/png',
      },
      {
        src: 'https://i.ibb.co/xf2yVCr/shan-tk-2.png',
        sizes: '1365x713',
        type: 'image/png',
      },
    ],
    icons,
  },
};
