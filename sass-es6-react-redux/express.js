'use strict';
const express = require('express');
const path = require('path');

// Express
const app = express();

// Public Files
let publicPath = 'build/dev';

// Environment
if (process.env.NODE_ENV === 'hotreloading') {
  // Configure hot reloading with Webpack
  const webpack = require('webpack');
  const config = require('./webpack/config.hot.js');
  const compiler = webpack(config);

  // Add middleware
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  if (process.env.NODE_ENV === 'production') {
    // Production
    publicPath = 'build/prod';
  } // Or, development

  // Serve our static stuff like index.css
  app.use(express.static(path.join(__dirname, publicPath)))
}
// Routes

// Send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, publicPath, 'index.html'))
})

// Start Server on Port 3000
const PORT = 8080;
app.listen(PORT, function() {
  console.log('Express server running at localhost:' + PORT)
})
