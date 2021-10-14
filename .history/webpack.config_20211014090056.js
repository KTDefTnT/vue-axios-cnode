const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './src/dist'),
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|less|scss)$/,
        use: ['css-loader', 'postcss-loader', {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(eot|svg|woff|ttf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name]-[hash:8].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    })
  ]
}