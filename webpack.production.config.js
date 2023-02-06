const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "hello-world": "./src/index.js",
    "cool-girl": "./src/cool-girl.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    // clean: {
    //   dry: true,
    //   keep: /\.css/,
    // },
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kb
          },
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanPlugin(),
    new CleanWebpackPlugin({
      //   cleanOnceBeforeBuildPatterns: [
      //     "**/*",
      //     path.join(process.cwd(), "build/**/*"),
      //   ],
    }),
    new HtmlWebpackPlugin({
      title: "Hello World",
      chunks: ["hello-world"],
      filename: "index.html",
      template: "src/index.hbs",
      //   filename: "subfolder/custom_filename.html",
      meta: {
        description: "some description",
      },
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "Cool Girl",
      chunks: ["cool-girl"],
      filename: "cool-girl.html",
      template: "src/index.hbs",
      //   filename: "subfolder/custom_filename.html",
      meta: {
        description: "Cool Girl",
      },
      minify: false,
    }),
  ],
};
