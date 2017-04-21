const path = require('path');
const webpack = require('webpack');
// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src/typescript'),
  // Entry point...
  entry: {
    app: './app.ts',
  },
  // Output endpoint (development)
  output: {
    path: path.resolve(__dirname, '../build/dev/js'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:8080/',
  },
  // Add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // Run the Dev Server (Hot reloading)
  devServer: {
    contentBase: path.resolve(__dirname, '../src/typescript'),
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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },{
        // Lint TypeScript (Airbnb Style Guide)
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
    // Enable async error reporting
    new CheckerPlugin(),
  ],
};
