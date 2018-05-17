const path = require('path')

module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 8080
  },
  entry: {
    index: './index.js'
  },
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
