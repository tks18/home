const webpackConfig = require('./webpack.config');
const metadata = require('./web-metadata');
const pwa = require('./pwa');

module.exports = {
  runtimeCompiler: true,
  pwa,
  publicPath: '',
  css: {
    requireModuleExtension: true,
  },
  configureWebpack: webpackConfig,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = metadata.title;
      args[0].twitterData = metadata.twitterData;
      args[0].keywords = metadata.keyWords;
      args[0].desc = metadata.webSiteDesc;
      args[0].url = metadata.baseSite;
      args[0].BASE_URL = '';
      return args;
    });
  },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
};
