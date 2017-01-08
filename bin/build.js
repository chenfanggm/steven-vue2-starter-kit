// https://github.com/shelljs/shelljs
process.env.NODE_ENV = 'production'
require('./../build/check-versions')()
require('shelljs/global')
const path = require('path')
const config = require('../config/index')
const ora = require('ora')
const webpack = require('webpack')
const webpackConfig = require('./../build/webpack.prod.js')

const spinner = ora('building for production...')
spinner.start()

const staticAssetsPath = path.join(config.dist, config.compiler_static_dir)
rm('-rf', staticAssetsPath)
mkdir('-p', staticAssetsPath)
cp((path.resolve('src/assets') + '/*'), staticAssetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
