const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    jobs: "./src/jobs/index.ts",
    oopsyraidsy: "./src/oopsyraidsy/index.ts",
    radar: "./src/radar/index.ts",
    raidboss: "./src/raidboss/index.ts",
  },
  output: {
    assetModuleFilename: "[name].[hash:8][ext][query]",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|cjs|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    chrome: "95",
                  },
                },
              ],
              ["@babel/preset-typescript"],
            ],
          },
        },
      },
      {
        test: /\.txt$/,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.CleanPlugin(),
  ],
};
