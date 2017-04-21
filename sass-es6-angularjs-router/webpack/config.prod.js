const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    filename: 'app.bundle.min.js',
    publicPath: 'js',
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
      }, {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader',
        }),
      }, {
        // Bundle HTML partials
        test: /\.html$/,
        exclude: /index.html/,
        use: [
          'raw-loader',
        ]
      },
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Copy html template files to 'partials' directory
    // new CopyWebpackPlugin([
    //   { from: '**/**/*.html', to: '../partials', flatten: true, ignore: ['index.html'] },
    // ]),
    // Extract CSS to separate file
    new ExtractTextPlugin({
      filename: '../css/app.bundle.min.css',
      allChunks: true,
    }),
  ],
};
