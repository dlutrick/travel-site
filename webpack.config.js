// Requires in path
const path = require("path");

// Added plugins for postcss
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  // Tells webpack what file is the entry point
  entry: "./app/assets/scripts/App.js",
  // Tells webpack what to name and where to place the newly bundled file
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  mode: "development",
  // Causes webpack to continue watching for changes
  watch: true,
  module: {
    rules: [
      {
        // Tells webpack to understand CSS files
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader?url=false",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: postCSSPlugins } },
          },
        ],
      },
    ],
  },
};
