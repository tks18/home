const { loaders, optimizations, plugins } = require('./webpack');
const WebpackBar = require('webpackbar');
const path = require('path');
const vueSrc = './src';

module.exports = {
  module: {
    rules: [...loaders],
  },
  optimization: optimizations,
  plugins: [...plugins, new WebpackBar()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, vueSrc),
    },
    extensions: ['.js', '.vue', '.json', '.css', '.scss'],
  },
  stats: 'normal',
};
