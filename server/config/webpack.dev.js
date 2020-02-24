const path = require('path');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const BaseDir = path.resolve(__dirname, '../', '../', '../');
const { CheckerPlugin } = require('awesome-typescript-loader');

// --config
const SECRET_KEY = require('../../config/secrets').SECRET_KEY;

module.exports = {
  entry: ['@babel/polyfill', './index.ts'],
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(BaseDir, 'dist/')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'sourcce-map',
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: "babel-loader"
      // },
      {
        test: /\.(ts|js)$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
        options: {
          configFile: Paths.tsconfigServer
        }
      }
    ]
  },
  mode: 'development',
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        SECRET_KEY: JSON.stringify(SECRET_KEY)
      }
    }),
    new NodemonPlugin({}), // Dong
    new CheckerPlugin()
  ]
};
