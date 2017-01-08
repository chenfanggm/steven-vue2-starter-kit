require('./../build/check-versions')()
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const opn = require('opn')
const config = require('../config/index')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./../build/webpack.prod.js')
  : require('./../build/webpack.dev.js')


const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
const proxyTable = config.proxy_table
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
app.use(hotMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.compiler_public_path, config.compiler_static_dir)
app.use(staticPath, express.static(path.posix.join('./', config.compiler_static_dir)))


module.exports = app.listen(config.server_port, function (err) {
  if (err) { return console.log(err) }
  const uri = 'http://localhost:' + config.server_port
  console.log('Listening at ' + uri + '\n')
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
