const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    photo_handlers: ['./src/app/handlers/photo_handlers.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
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
