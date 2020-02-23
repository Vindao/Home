const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../', 'index.ts'),
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../', 'dist/'),
    publicPath: path.resolve(__dirname, '../', 'dist/')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.json')
        }
      }
    ]
  },
  mode: 'development',
  target: 'node',
  plugins: [new NodemonPlugin()]
};
