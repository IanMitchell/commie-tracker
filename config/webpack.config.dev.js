var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/client',
  ],
  output: {
    path: path.resolve(__dirname, "/public/js"),
    filename: 'app.js',
    publicPath: 'http://localhost:8080/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("app.[hash].css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        BROWSER: JSON.stringify(true)
      }
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?experimental'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: "style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true"
      },
      {
        test: /\.png$/,
        loader: "url?limit=100000&mimetype=image/png",
      },
      {
        test: /\.svg$/,
        loader: "url?limit=100000&mimetype=image/svg+xml",
      },
      {
        test: /\.gif$/,
        loader: "url?limit=100000&mimetype=image/gif",
      },
      {
        test: /\.jpg$/,
        loader: "file",
      },
    ]
  }
}
