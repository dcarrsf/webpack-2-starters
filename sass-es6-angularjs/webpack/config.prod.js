const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src/es6'),
  // Entry point...
  entry: {
    app: './app.js',
  },
  // Output endpoint (production)
  output: {
    path: path.resolve(__dirname, '../build/prod/js'),
    filename: '[name].bundle.min.js',
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
      },{
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader',
        }),
      },
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Extract CSS to separate file
    new ExtractTextPlugin({
      filename: '../css/[name].bundle.min.css',
      allChunks: true,
    }),
  ],
};
