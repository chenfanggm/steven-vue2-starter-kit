const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')


// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/hmr-client'].concat(baseWebpackConfig.entry[name])
})

const preLoaders = []
if (process.env.NODE_MODE === 'lint') {
  preLoaders.push({ test: /\.(js|vue)$/, loader: 'eslint', include: path.resolve(__dirname, '../'), exclude: /node_modules/ })
}

module.exports = merge(baseWebpackConfig, {
  module: {
    preLoaders: preLoaders,
    loaders: utils.styleLoaders({ sourceMap: config.compiler_css_source_map })
  },
  // eval-source-map is faster for development
  devtool: config.compiler_devtool,
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
})
