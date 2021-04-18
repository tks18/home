/* eslint-disable */
const webpackConfig = require('./webpack.config');
const metadata = require('./web-metadata');

module.exports = {
  runtimeCompiler: true,
  publicPath: '',
  css: {
    requireModuleExtension: true,
  },
  configureWebpack: webpackConfig,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.whitespace = 'preserve';
        return options;
      });
    config.plugin('html').tap((args) => {
      args[0].title = metadata.title;
      args[0].twitterData = metadata.twitterData;
      args[0].keywords = metadata.keyWords;
      args[0].desc = metadata.webSiteDesc;
      args[0].url = metadata.baseSite;
      args[0].BASE_URL = '';
      args[0].minify = {
        ...args[0].minify,
        caseSensitive: true,
        collapseWhitespace: false,
        conservativeCollapse: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeAttributeQuotes: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
      };
      return args;
    });
  },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
};
