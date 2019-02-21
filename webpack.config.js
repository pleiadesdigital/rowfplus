var path = require('path');

module.exports = {
  entry: "./public/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "./public/js"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ["env"]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
