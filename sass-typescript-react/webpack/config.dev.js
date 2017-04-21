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
    app: './app.tsx',
  },
  // Output endpoint (development)
  output: {
    path: path.resolve(__dirname, '../build/dev/js'),
    filename: '[name].bundle.js',
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
        use: ['awesome-typescript-loader'],
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
      },{
        // Sourcemap helper
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Enable async error reporting
    new CheckerPlugin(),
  ],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
