const routes = require('./routes-seo');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
      splitChunks: {
        chunks: 'async',
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
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
