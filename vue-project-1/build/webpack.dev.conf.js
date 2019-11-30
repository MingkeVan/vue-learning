var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  entry: './dev/test.js',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    open: true,
    hot: true,
    inline: true
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './dev/test.html',
      filename: 'test.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
