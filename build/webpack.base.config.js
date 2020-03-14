const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = require('../config')
const package = require('../package.json')
let version = Date.now();
let NODE_ENV = process.env.NODE_ENV;
let isDev = NODE_ENV === 'dev';



function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

let plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    title: 'vue webapck demo',
    template: resolve('../index.html'),
    //favicon: resolve('../favicon.ico'),
    hash: true,
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    }
  }),
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    'CONFIG': JSON.stringify(config),
    'process.env': JSON.stringify(process.env)
  })
];

if (!isDev) {
  plugins.push(
    new miniCssExtractPlugin({
      filename: `[name].[hash:5].${version}.css`,
      chunkFilename: `css/[name].[hash:5].${version}.css`
    })
  )
}

module.exports = {
  entry: resolve('../src/main.js'),
  output: {
    path: resolve('../dist'),
    filename: `js/[name].[hash:5].${version}.js`,
    chunkFilename: `js/[name].[hash:5].${version}.js`,
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': resolve('../src'),
      '@assets': resolve('../src/assets'),
      '@components': resolve('../src/components'),
      '@common': resolve('../src/r-common-module'),
      '@store': resolve('../src/store'),
      '@views': resolve('../src/views')
    }
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial"
        },
        elementUI: {
          name: "element-ui",
          priority: 20,
          test: /[\/]node_modules[\/]element-ui[\/]/
        },
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('../src')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : {loader: miniCssExtractPlugin.loader},
          {loader: 'css-loader?importLoaders=1'},
        ]
      },
      {
        test: /\.less$/,
        use: [
          isDev ? 'style-loader' : {
            loader: miniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js')
              }
            },
          },
          'less-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                //resolve('../src/r-common-module/assets/css/variables.less')
              ]
            }
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            'less': [
              'vue-style-loader',
              'css-loader',
              'less-loader?indentedSyntax'
            ]
          },
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'images/'
            }
          },
        ]
      },
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
    ]
  }

};
