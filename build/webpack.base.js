const path = require('path')
const webpack = require('webpack')
const _lowerCase = require('lodash/lowerCase')
const config = require('../config')
const utils = require('./utils')


// define module root
var moduleResolveRoot = []
if (process.env.ENV_LANG) {
  moduleResolveRoot.push(path.resolve(__dirname, '../src/i18n', _lowerCase(__LANG__)))
}
moduleResolveRoot.push(path.resolve(__dirname, '../src'))

module.exports = {
  entry: {
    app: [
      'font-awesome-sass-loader',
      './src/app.js'
    ]
  },
  output: {
    path: config.dist,
    publicPath: config.compiler_public_path,
    filename: `[name].[${config.compiler_hash_type}].js`,
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    root: moduleResolveRoot,
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'COMPONENTS': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  plugins: [
    new webpack.DefinePlugin({
      __LANG__: process.env.NODE_LANG ? `'${process.env.NODE_LANG}'`: false,
      __DEV__: process.env.NODE_ENV === 'development',
      __PROD__: process.env.NODE_ENV === 'production'
    })
  ],
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', include: path.resolve(__dirname, '../'), exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, loader: 'vue-html' },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: config.compiler_css_source_map }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
