const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(),
  output: {
    path: path.resolve(__dirname, './src/dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|less|scss)$/,
        use: ['css-loader', 'scss-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: 'url-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    })
  ]

}