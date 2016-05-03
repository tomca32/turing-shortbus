module.exports = {
  entry: './src/ts/main.ts',
  output: {
    filename: 'build/js/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
