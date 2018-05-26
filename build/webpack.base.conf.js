const path = require('path');
const utils = require('./utils');

module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': utils.resolve('src'),
    },
    modules: [
      'node_modules',
      utils.resolve('src'),
      utils.resolve('node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};
