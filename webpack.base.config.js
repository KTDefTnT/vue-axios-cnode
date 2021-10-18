const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 每次打包前清空dist目录
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin'); // 缓存 加快打包速度
const PurifyCssPlugin = require('purifycss-webpack'); // 删除无用css
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); // 分析每个模块所花费的时间
const SpeedMeasure = new SpeedMeasurePlugin();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 每个包的体积分析

const glob = require('glob');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash:8].js',
    publicPath: '/'
  },
  performance: {
    maxAssetSize: 10000000,
    maxEntrypointSize: 100000000,
    hints: false
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', {
          loader: 'sass-loader',
          options: {
            indentedSyntax: true
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1024 * 3,
          name: '/img/[name].[contenthash:8].[ext]'
        }
      },
      {
        test: /\.(eot|woff|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 1024 * 3,
          name: '/fonts/[name].[contenthash:8].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },{
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '仿cnode',
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    }),

    new PurifyCssPlugin({
      paths: glob.sync(__dirname, "./*.html"),
    }),
    new CleanWebpackPlugin(), // 每次打包前清空dist目录
    new HardSourceWebpackPlugin(), // 加快打包速度
    // new BundleAnalyzerPlugin(), // 包体积分析
    new MiniCssExtractPlugin({ // css提取到指定文件目录中
      filename: 'css/[name]-[contenthash].css',
      chunkFilename: 'css/[id]-[contenthash].css'
    })
  ]
};

module.exports = SpeedMeasure.wrap(config);