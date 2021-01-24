module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: false,
        targets: 'last 2 versions',
      },
    ],
  ],
};
