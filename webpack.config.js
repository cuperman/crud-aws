const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    photo_handlers: ['./src/app/handlers/photo_handlers.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      beautify: true,
      compress: true,
      mangle: false
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
