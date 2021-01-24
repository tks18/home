const path = require('path');

// Paths
let src = './src';
let assets = './src/assets';
let component = './src/components';
let libs = './src/libs';
let plugins = './src/plugins';
let router = './src/router';
let styles = './src/styles';
let templates = './src/templates';
let views = './src/views';

// Files
let eventBus = './src/EventBus.js';
let state = './src/plugins/state.js';

module.exports = (dir) => {
  return {
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
      '@eventbus': path.resolve(dir, eventBus),
      '@state': path.resolve(dir, state),
    },
    extensions: ['.js', '.vue', '.json', '.css', '.scss'],
  };
};
