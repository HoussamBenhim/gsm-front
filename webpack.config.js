const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  plugins: [new Dotenv()]
  //...
}
