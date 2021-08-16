const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/template/about.html",
      filename: "about.html",
    }),
    new webpack.ProvidePlugin({
      axios: "axios",
    }),
  ],
};
