const routes = require('./routes-seo');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Critters = require('critters-webpack-plugin');
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
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ],
    },
    plugins: [
      new Critters({
        preload: 'swap',
        preloadFonts: true,
      }),
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
