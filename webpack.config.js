var path = require('path');

module.exports = {
  entry: "./public/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "./public/js"),
    filename: "main.js"
  }
}
