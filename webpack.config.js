const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack'); //to access built-in plugins


module.exports = {
  entry: {
    index: './js/src/index.js',
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js?' + pkg.version,
    sourceMapFilename: '[name].bundle.js.map',
    path: path.resolve(__dirname, 'js/dist'),
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader'
      }
    ]
  },
};
