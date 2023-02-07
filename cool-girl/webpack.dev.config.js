const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/cool-girl.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9002/",
    // clean: {
    //   dry: true,
    //   keep: /\.css/,
    // },
  },
  mode: "development",
  devServer: {
    port: 9002,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "cool-girl.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.txt/,
        type: "asset/source",
      },
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
    new CleanWebpackPlugin({
      //   cleanOnceBeforeBuildPatterns: [
      //     "**/*",
      //     path.join(process.cwd(), "build/**/*"),
      //   ],
    }),
    new HtmlWebpackPlugin({
      title: "Cool Girl",
      template: "src/index.hbs",
      filename: "cool-girl.html",
      meta: {
        description: "cool girl",
      },
    }),
    new ModuleFederationPlugin({
      name: "CoolGirlApp",
      filename: "remoteEntry.js",
      exposes: {
        "./CoolGirlPage": "./src/components/cool-girl.js",
      },
      remotes: {
        ImageCaptionApp: "ImageCaptionApp@http://localhost:9003/remoteEntry.js",
      },
    }),
  ],
};
