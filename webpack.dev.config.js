const path = require("path");
const { CleanPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "hello-world": "./src/index.js",
    "cool-girl": "./src/cool-girl.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    // clean: {
    //   dry: true,
    //   keep: /\.css/,
    // },
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
    new CleanPlugin(),
    new CleanWebpackPlugin({
      //   cleanOnceBeforeBuildPatterns: [
      //     "**/*",
      //     path.join(process.cwd(), "build/**/*"),
      //   ],
    }),
    new HtmlWebpackPlugin({
      title: "Hello World",
      template: "src/index.hbs",
      chunks: ["hello-world"],
      filename: "index.html",
      meta: {
        description: "some description",
      },
    }),
    new HtmlWebpackPlugin({
      title: "Cool Girl",
      template: "src/index.hbs",
      chunks: ["cool-girl"],
      filename: "cool-girl.html",
      meta: {
        description: "cool girl",
      },
    }),
  ],
};
