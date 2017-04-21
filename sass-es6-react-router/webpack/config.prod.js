const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src/es6'),
  // Entry point...
  entry: {
    app: './main.jsx',
  },
  // Output endpoint (production)
  output: {
    path: path.resolve(__dirname, '../build/prod/js'),
    filename: 'app.bundle.min.js',
  },
  // Add '.jsx' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        test: /\.jsx$/,
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
      filename: '../css/app.bundle.min.css',
      allChunks: true,
    }),
    // Define environment
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin()
  ],
};
