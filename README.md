## webpack-demo vue.js

### v1.0.0
> 传统的webpack 打包项目，需要注意的是这两点
```javascript
const VueLoaderPlugin = require('vue-loader/lib/plugin');

{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
  }
},
```
* [vue-loader](https://github.com/vuejs/vue-loader)
* [babel-loader](https://github.com/babel/babel-loader)

### node-webpack
> node版本编译
```javascript
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

```

* [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
* [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)


> 未完待续.....
