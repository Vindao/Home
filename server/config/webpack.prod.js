const path = require('path');
const webpack = require('webpack');

const BaseDir = path.resolve(__dirname, '../../');

module.exports = {
  entry: ['../src-ssr/index.js'],
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(BaseDir, 'dist/'),
    publicPath: BaseDir + 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, '../tsconfig.json')
        }
      }
    ]
  },
  mode: 'production',
  target: 'node'
};
