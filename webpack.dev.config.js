'use strict'
const webpack = require('webpack');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  // NODE_ENV: '"development"',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://cnodejs.org/api/v1',//api代理服务器地址http://ip:port
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
  
})