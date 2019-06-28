const path = require('path')

const baseConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
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
}

const electronConfig = (type) => ({
  ...baseConfig,
  entry: {
    [type]: `./src/${type}.ts`
  },
  target: `electron-${type}`,
})

module.exports = [
  electronConfig('main'),
  electronConfig('renderer'),
]
