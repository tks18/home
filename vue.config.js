const routes = require('./routes-seo');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const path = require('path');
const vueSrc = './src/';

let baseSite = require('./package.json').baseSite;

module.exports = {
  runtimeCompiler: true,
  publicPath: '',
  css: {
    requireModuleExtension: true,
  },
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: baseSite,
        paths: routes,
        options: {
          filename: 'sitemap.xml',
          lastmod: true,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, vueSrc),
      },
      extensions: ['.js', '.vue', '.json', '.css', '.scss'],
    },
  },
  chainWebpack: (config) => {
    let title = require('./package.json').title;
    config.plugin('html').tap((args) => {
      args[0].title = title;
      return args;
    });
  },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
};
