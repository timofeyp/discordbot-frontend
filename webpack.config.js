const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index-bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8090',
        secure: false,
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      actions: path.resolve(__dirname, './src/actions'),
      components: path.resolve(__dirname, './src/components'),
      reducers: path.resolve(__dirname, './src/reducers'),
      storage: path.resolve(__dirname, './src/storage'),
      styles: path.resolve(__dirname, './src/styles')
    }
  }
}
