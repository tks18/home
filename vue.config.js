const webpackConfig = require('./webpack.config');

let title = require('./package.json').title;

module.exports = {
  runtimeCompiler: true,
  publicPath: '',
  css: {
    requireModuleExtension: true,
  },
  configureWebpack: webpackConfig,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = title;
      args[0].BASE_URL = '';
      return args;
    });
  },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
};
