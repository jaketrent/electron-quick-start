/* eslint strict: 0 */
'use strict'

const path = require('path')
const postcssImport = require('postcss-import')
const postcssUrl = require('postcss-url')
const postcssCssNext = require('postcss-cssnext')
const postcssReporter = require('postcss-reporter')

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [

  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
  ],
  postcss: [
    postcssImport,
    postcssUrl({ url: function (url) { return url } }),
    postcssCssNext,
    postcssReporter
  ],
}
