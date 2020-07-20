var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    constructor: ["./src/patterns/constructor/index.ts"],
    observer: ["./src/patterns/observer/example/index.ts"],
    pubsubDecouplingApp: ["./src/patterns/pubSub/decouplingApplications/index.ts"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "observer.html",
      template: "src/patterns/observer/example/index.html",
      chunks: ["observer"],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "decouplingApp.html",
      template: "src/patterns/pubSub/decouplingApplications/index.html",
      chunks: ["pubsubDecouplingApp"],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
