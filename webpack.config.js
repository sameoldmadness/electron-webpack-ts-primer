const path = require('path')

const electronConfig = (type) => ({
  entry: `./src/${type}.ts`,
  target: `electron-${type}`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${type}.js`
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  }
})

module.exports = [
  electronConfig('main'),
  electronConfig('renderer'),
]
