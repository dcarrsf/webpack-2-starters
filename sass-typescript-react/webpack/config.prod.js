const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src/typescript'),
  // Entry point...
  entry: {
    app: './app.tsx',
  },
  // Output endpoint (production)
  output: {
    path: path.resolve(__dirname, '../build/prod/js'),
    filename: '[name].bundle.min.js',
  },
  // Add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        // Transpile TypeScript
        test: /\.tsx?$/,
        use: [
          'awesome-typescript-loader',
        ],
      },{
        // Transpile SASS
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin()
  ],
};
