const path = require('path');

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
  mode: 'production',
  target: 'node'
};
