const { loaders, optimizations, plugins, resolvers } = require('./webpack');
const WebpackBar = require('webpackbar');

module.exports = {
  module: {
    rules: [...loaders],
  },
  optimization: optimizations,
  plugins: [...plugins, new WebpackBar()],
  resolve: resolvers(__dirname),
  resolveLoader: {
    modules: ['node_modules'],
  },
  stats: 'normal',
};
