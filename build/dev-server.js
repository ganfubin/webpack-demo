const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();
let compiler = webpack(webpackConfig);

let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

app.use(devMiddleware);

console.log('> Listening at http://localhost:8080 \n');
app.listen(8080);