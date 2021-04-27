const WebpackBar = require('webpackbar');
const { loaders, optimizations, plugins, resolvers } = require('./webpack');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [...loaders]
  },
  optimization: optimizations,
  plugins: [...plugins, new WebpackBar()],
  resolve: resolvers(__dirname),
  resolveLoader: {
    modules: ['node_modules']
  },
  stats: 'normal'
};
