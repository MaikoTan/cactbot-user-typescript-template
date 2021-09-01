const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    jobs: "./src/jobs/index.js",
    oopsyraidsy: "./src/oopsyraidsy/index.js",
    radar: "./src/radar/index.js",
    raidboss: "./src/raidboss/index.js",
  },
  output: {
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
                    chrome: "75",
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
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new webpack.CleanPlugin(),
  ],
};
