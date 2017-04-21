const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src/jsx'),
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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Generate index.html file
    new HtmlWebpackPlugin({
      title: 'Codesmith Author',
      filename: '../index.html',
      template: 'index.ejs'
    }),
    // Define environment
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // Uglify
    new webpack.optimize.UglifyJsPlugin()
  ],
};
