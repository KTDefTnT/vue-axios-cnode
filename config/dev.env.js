'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
    '/api': {
      target: 'https://cnodejs.org/api/v1',//api代理服务器地址http://ip:port
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
})
