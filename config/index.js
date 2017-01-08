const path = require('path')
const debug = require('debug')('app:config')


debug('Create default configuration.')

// ========================================================
// Default Configuration
// ========================================================
const config = {
  env : process.env.NODE_ENV || 'development',

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  dist: path.resolve(__dirname, '../dist'),

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host: 'localhost',
  server_port: process.env.PORT || 3000,
  proxy_table: {
    // proxy all requests starting with /api to your-api-host
    //'/api': {
    //  target: 'http://your-api-host.com',
    //  changeOrigin: true,
    //  pathRewrite: {
    //    '^/api': ''
    //  }
  },

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_public_path: '/',
  compiler_index: path.resolve(__dirname, '../dist/index.html'),
  compiler_static_dir: 'static',
  compiler_hash_type: 'hash',
  compiler_devtool: '#eval-source-map',
  compiler_gzip: false,
  compiler_gzip_extension: ['js', 'css'],
  compiler_css_source_map: false,
  compiler_fail_on_warning: false
}


// ========================================================
// Environment Configuration
// ========================================================
debug(`Looking for environment overrides for NODE_ENV "${config.env}".`)
const environments = require('./environments')
const overrides = config.env === 'testing' ? environments['production'] : environments[config.env]
if (overrides) {
  debug('Found environment overrides, applying to default configuration.')
  Object.assign(config, overrides(config))
} else {
  debug('No environment overrides found, defaults will be used.')
}

module.exports = config
