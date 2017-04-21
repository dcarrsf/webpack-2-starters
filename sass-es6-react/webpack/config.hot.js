const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src/es6'),
  // Entry point...
  entry: {
    app: './app.jsx',
    vendor: ['react', 'react-dom'],
  },
  // Output endpoint (development)
  output: {
    path: path.resolve(__dirname, '../build/dev/js'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:8080/',
  },
  // Add '.jsx' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Run the Dev Server (Hot reloading)
  devServer: {
    contentBase: path.resolve(__dirname, '../src/es6'),
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          'babel-loader',
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
    // Code splitting React and ReactDOM to separate bundles
    new webpack.optimize.CommonsChunkPlugin({
      "name": "vendor",
      "chunk": "vendor.bundle.js"
    })
  ],
};
