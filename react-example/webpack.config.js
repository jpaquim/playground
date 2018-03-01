const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  entry: './src/index.js',
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  devServer: { contentBase: './public', open: true },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve('./src'),
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      },
    ],
  },
};
