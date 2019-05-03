const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
        
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'style.css',
    }),
  ]
};