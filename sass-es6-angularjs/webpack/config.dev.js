const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src/es6'),
  // Entry point...
  entry: {
    app: './app.js',
    vendor: ['angular'],
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
      },{
        // Transpile SASS
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },{
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
      "name": "vendor",
      "chunk": "vendor.bundle.js"
    })
  ],
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
