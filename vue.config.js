const webpackConfig = require('./webpack.config');

let title = require('./package.json').title;
let baseSite = require('./package.json').baseSite;
let webSiteDesc =
  'Building Online Answers for Your Next Design Challenge. Sometimes Writes Blogs about Latest Tech Developments and Frameworks. Forgot, this is Sudharshan TK hehe xD';

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
      args[0].desc = webSiteDesc;
      args[0].url = baseSite;
      args[0].BASE_URL = '';
      return args;
    });
  },
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
};
