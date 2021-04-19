/* eslint-disable */

const routes = require('./routes-seo');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const zlib = require('zlib');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer');
const StatoscopeWebpackPlugin = require('@statoscope/ui-webpack');
const BundleTracker = require('webpack-bundle-tracker');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const metadata = require('../web-metadata');

const isProd = process.env.NODE_ENV != 'development';
const obfuscate = process.env.VUE_APP_OBFUSCATE == 1;

const obfustcatePlugin = [
  new JavaScriptObfuscator(
    {
      compact: false,
      rotateStringArray: true,
      stringArray: true,
      shuffleStringArray: true,
      numbersToExpressions: true,
      simplify: true,
      splitStrings: true,
    },
    [
      'worker.js',
      'js/chunk-vendors.*.js',
      'js/chunk-vendors.*.js.br',
      'js/chunk-vendors.*.js.map',
    ],
  ),
];

const productionPlugins = [
  new HtmlWebpackPlugin({
    inject: true,
    title: metadata.title,
    twitterData: metadata.twitterData,
    BASE_URL: '',
    desc: metadata.webSiteDesc,
    url: metadata.baseSite,
    filename: 'offline.html',
    minify: {
      caseSensitive: true,
      collapseWhitespace: false,
      conservativeCollapse: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeAttributeQuotes: false,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
    },
    template: 'public/index.html',
  }),
  new SitemapPlugin({
    base: metadata.baseSite,
    paths: routes,
    options: {
      filename: 'sitemap.xml',
      lastmod: true,
    },
  }),
  new CompressionPlugin({
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

const devPlugins = [
  new HtmlWebpackPlugin({
    inject: true,
    title: metadata.title,
    keywords: metadata.keyWords,
    twitterData: metadata.twitterData,
    BASE_URL: '',
    desc: metadata.webSiteDesc,
    url: metadata.baseSite,
    filename: 'offline.html',
    minify: {
      caseSensitive: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeAttributeQuotes: false,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
    },
    template: 'public/index.html',
  }),
  new SitemapPlugin({
    base: metadata.baseSite,
    paths: routes,
    options: {
      filename: 'sitemap.xml',
      lastmod: true,
    },
  }),
];

const exportedplugins = isProd ? productionPlugins : devPlugins;
module.exports = obfuscate
  ? exportedplugins.concat(obfustcatePlugin)
  : exportedplugins.concat([]);
