var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
var precss = require('precss')


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    sourceMapFilename: "bundle.map"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin()
  ],
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [ path.resolve(__dirname, "src"), ]
      }
    ],
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [ path.resolve(__dirname, "src"), ],
        test: /\.jsx?$/,
        plugins: ['transform-runtime'],
      },
      {
        test: /\.s?css$/,
        loader: "style-loader!css-loader!postcss-loader!sass-loader"
      }
    ]
  },
  postcss: function() {
    return [precss]
  }
}