module.export = {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  development: (config) => ({
    globals: Object.assign(config.globals, {
      __NODE_API_URL__: JSON.stringify(`http://${config.server_host}:${config.server_port}/api/v1`),
    })
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production: (config) => ({
    server_host : 'your_host_domain.com',
    compiler_hash_type: 'chunkhash',
    compiler_devtool: config.compiler_css_source_map ? '#source-map' : false,
    compiler_css_source_map: true,
    compiler_gzip: false,
    compiler_fail_on_warning: false,
    compiler_stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    },
    cache_control: { max_age: 2 * 60 * 60 * 1000 }, // 2 hours
    globals: Object.assign(config.globals, {
      __NODE_API_URL__: JSON.stringify(`http://your_host_domian.com/api/v1`)
    }),
    proxy_table: {
      // proxy all requests starting with /api to jsonplaceholder
      //'/api': {
      //  target: 'http://jsonplaceholder.typicode.com',
      //  changeOrigin: true,
      //  pathRewrite: {
      //    '^/api': ''
      //  }
    },
  })
}

