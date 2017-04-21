const path = require('path');
const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src/es6'),
  // Entry point...
  entry: {
    app: './app.js',
    vendor: ['angular', 'angular-route'],
  },
  // Output endpoint (development)
  output: {
    path: path.resolve(__dirname, '../build/dev/js'),
    filename: '[name].bundle.js',
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        // Transpile ES6
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      }, {
        // Transpile SASS
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }, {
        // Bundle HTML partials
        test: /\.html$/,
        exclude: /index.html/,
        use: [
          'raw-loader',
        ]
      }, {
        // Lint JavaScript (Airbnb Style Guide)
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
    // Code splitting React and ReactDOM to separate bundles
    new webpack.optimize.CommonsChunkPlugin({
      'name': 'vendor',
      'chunk': '[name].bundle.js'
    }),
    // Copy html template files to 'partials' directory
    // new CopyWebpackPlugin([
    //   { from: '**/**/*.html', to: '../partials', flatten: true, ignore: ['index.html'] },
    // ]),
  ],
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
