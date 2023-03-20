const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  output: {
    assetModuleFilename: "images/[name].[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //May vary on the filename
      scriptLoading: "module",
      inject: "body",
    }),
  ],
};
