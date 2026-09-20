const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/sass/style.scss',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: false},
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3|wav)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
    {
      template: './index.html',
      filename: './index.html',
      minify: false,
    }
  ),
  new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
],
  devServer: {
    compress: true,
    port: 8080,
  },
  mode: 'development',
};