const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src/es6'),
  // Entry point...
  entry: [
    'webpack-hot-middleware/client?http://localhost:8080',
    './main.jsx',
  ],
  // Output endpoint (development)
  output: {
    path: '/',
    filename: 'app.bundle.js',
    publicPath: '/js/',
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
          'react-hot-loader',
          'babel-loader'
        ],
      },{
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
      },
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Hot module reloading with node
    new webpack.HotModuleReplacementPlugin()
  ],
};
