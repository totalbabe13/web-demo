const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: path.resolve(__dirname, '/dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    publicPath: path.resolve(__dirname, '/dist'),
  }
}