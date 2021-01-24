const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let loaders = [
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
  },
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
          },
        },
      },
    ],
  },
];

module.exports = loaders;
