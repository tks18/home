const path = require('path');

// Paths
const src = './src';
const assets = './src/assets';
const component = './src/components';
const libs = './src/libs';
const plugins = './src/plugins';
const router = './src/router';
const styles = './src/styles';
const templates = './src/templates';
const views = './src/views';

// Files
const state = './src/plugins/state/index.js';

module.exports = (dir) => ({
  alias: {
    '@': path.resolve(dir, src),
    '@a': path.resolve(dir, assets),
    '@c': path.resolve(dir, component),
    '@l': path.resolve(dir, libs),
    '@p': path.resolve(dir, plugins),
    '@r': path.resolve(dir, router),
    '@styles': path.resolve(dir, styles),
    '@t': path.resolve(dir, templates),
    '@v': path.resolve(dir, views),
    '@state': path.resolve(dir, state)
  },
  extensions: ['.js', '.vue', '.json', '.css', '.scss'],
  modules: ['node_modules']
});
