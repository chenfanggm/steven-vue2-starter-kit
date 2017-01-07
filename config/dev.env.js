var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_LANG: process.env.ENV_LANG ? '\'' + process.env.ENV_LANG + '\'': false
})
