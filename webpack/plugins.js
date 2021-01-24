const routes = require('./routes-seo');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const zlib = require('zlib');
const compressionPlugin = require('compression-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer')
  .WebpackBundleSizeAnalyzerPlugin;
const StatoscopeWebpackPlugin = require('@statoscope/ui-webpack');
const BundleTracker = require('webpack-bundle-tracker');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

let title = require('../package.json').title;
let baseSite = require('../package.json').baseSite;
let isProd = process.env.NODE_ENV != 'development';

let productionPlugins = [
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
    filename: '../dist/stats/bundle-stats.json',
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
  new WebpackManifestPlugin({
    fileName: './stats/manifest.json',
  }),
  new WebpackBundleSizeAnalyzerPlugin('./stats/size-analysis.txt'),
  new StatsWriterPlugin({
    filename: './stats/raw-stats.json',
  }),
];

let devPlugins = [
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
];

module.exports = isProd ? productionPlugins : devPlugins;
