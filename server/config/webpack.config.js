const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const BaseDir = path.resolve(__dirname, "../../");

module.exports = {
  entry: path.resolve(BaseDir, "index.ts"),
  output: {
    filename: "server.bundle.js",
    path: path.resolve(BaseDir, "dist/server/")
  },
  devtool: !isProduction && "source-map",
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
        options: {
          configFile: path.resolve(__dirname, "../tsconfig.json")
        }
      }
    ]
  },
  mode: isProduction ? "production" : "development",
  watch: !isProduction,
  target: "node",
  plugins: isProduction ? [new CompressionPlugin()] : [new NodemonPlugin()]
};
