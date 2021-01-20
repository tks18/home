module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        targets: 'last 2 versions',
      },
    ],
  ],
};
