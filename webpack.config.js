const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    photo_handlers: ['./app/handlers/photo_handlers.js']
  },
  target: 'node',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      beautify: false,
      compress: true,
      mangle: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist/handlers'),
    filename: 'photo_handlers.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ 'es2015' ]
        }
      }
    }]
  }
};
