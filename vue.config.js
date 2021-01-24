const routes = require('./routes-seo');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const zlib = require('zlib');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const compressionPlugin = require('compression-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer')
  .WebpackBundleSizeAnalyzerPlugin;
const StatoscopeWebpackPlugin = require('@statoscope/ui-webpack');
const BundleTracker = require('webpack-bundle-tracker');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const WebpackBar = require('webpackbar');
const path = require('path');
const vueSrc = './src/';

let baseSite = require('./package.json').baseSite;
let title = require('./package.json').title;

module.exports = {
  runtimeCompiler: true,
  publicPath: '',
  css: {
    requireModuleExtension: true,
  },
  configureWebpack: {
    module: {
      rules: [
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
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 20000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        inject: true,
        title: title,
        BASE_URL: '',
        filename: 'offline.html',
        template: 'public/index.html',
      }),
      new SitemapPlugin({
        base: baseSite,
        paths: routes,
        options: {
          filename: 'sitemap.xml',
          lastmod: true,
        },
      }),
      new compressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        test: /\.js$|\.css$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new StatoscopeWebpackPlugin({
        saveTo: './dist/stats/ui-stats.html',
        saveStatsTo: './dist/stats/ui-stats.json',
        watchMode: false,
        name: 'Shan.tk-UI Analysis',
        open: false,
      }),
      new BundleTracker({
        path: __dirname,
        filename: './dist/stats/bundle-stats.json',
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'json',
        reportFilename: './stats/bundle-analyzer.json',
        reportTitle: 'Shan.tk Analysis',
        openAnalyzer: false,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: './stats/bundle-analyzer.html',
        reportTitle: 'Shan.tk Analysis',
        openAnalyzer: false,
      }),
      new WebpackBundleSizeAnalyzerPlugin('./stats/size-analysis.txt'),
      new StatsWriterPlugin({
        filename: './stats/raw-stats.json',
      }),
      new WebpackBar(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, vueSrc),
      },
      extensions: ['.js', '.vue', '.json', '.css', '.scss'],
    },
    stats: 'normal',
  },
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
