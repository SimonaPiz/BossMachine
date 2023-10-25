'use strict';

const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './browser/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './public/js/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', { targets: "defaults" }],
              ['@babel/preset-env', { targets: "defaults" }],
            ]
          }
        },
      }
    ]
  }
};