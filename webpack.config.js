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
    new CopyPlugin({
      patterns: [
        {
          from: "./src/raidboss/data/**/*.txt",
          to: "./[name][ext]",
        },
      ]
    })
  ],
};
