var { readFileSync } = require('fs')
var babelConfig = JSON.parse(readFileSync('.babelrc'))
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var pages = require('../pages.js')

var entryConfig = {}
pages.forEach(function (page) {
  entryConfig[page] = ['./src/' + page + '.js']
})

var titleCase = function (word, index) {
  var capitalise = function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }
  if (index === 0) return capitalise(word)
  var exceptions = [
    'the',
    'a',
    'an',
    'and',
    'but',
    'or',
    'for',
    'nor',
    'on',
    'at',
    'to',
    'from',
    'by',
  ]
  if (exceptions.contains(word)) return word.toLowerCase()
  return capitalise(word)

}

var pageTitleFormatted = function (pageFilename) {
  var words = pageFilename.split('_')
  return word.map(titleCase).join(' ')
}

var htmlGenPlugin = pages.map(function (page) {
  var title =
  return new HtmlWebpackPlugin({
    title: pageTitleFormatted(),
    inject: 'head',
    filename: page + '.html',
    // template: './src/page_templates/' + page + '.html'
  })
})

module.exports = {
  entry: entryConfig,
  resolve: {
    extensions: [ '.js', '.html' ]
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  plugins: htmlGenPlugin.concat([
    // new ExtractTextPlugin("styles.css"),
  ]),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
      {
        test: /(\.html)$/,
        exclude: /(src\/page_templates.+\.html|node_modules)/,
        use: 'svelte-loader'
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use:
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         // camelCase: true,
      //         modules: true,
      //         // minimize: true,
      //         // sourceMap: true,
      //       }
      //     },
      //     // ExtractTextPlugin.extract({
      //     //   fallback: "style-loader",
      //     //   use: "css-loader",
      //     //   loader: 'css-loader'
      //     //   // options: { modules: true }
      //     // }),
      // },
      // {
      //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000
      //   }
      // },
      // {
      //   test: /\.html$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       minimize: true,
      //       removeComments: false,
      //       collapseWhitespace: false
      //     }
      //   }
      // },
    ],
  },
  devtool: 'source-map'
}

// var webpack = require('webpack'),
//     path = require('path'),
//     ExtractTextPlugin = require('extract-text-webpack-plugin'),
//     Clean = require('clean-webpack-plugin')

// {
//   devtool: 'cheap-module-source-map',
//   entry: {
//       app: path.resolve(__dirname, '../app/index.js'),
//   },
//   output: {
//       path: path.resolve(__dirname, '../dist'),
//       filename: 'js/bundle.js',
//       publicPath: '/static/'
//   },
//   module: {
//       loaders: [{
//           test: /\.js$/,
//           loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0,plugins[]=transform-decorators-legacy'],
//           include: path.join(__dirname, '../app'),
//       },{
//           test: /\.css$/,
//           loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
//       },{
//           test: /\.(woff|woff2|eot|ttf)$/,
//           loader: 'url-loader?limit=8192&name=fonts/[name].[ext]'
//       },{
//           test: /\.(png|jpg|svg)$/,
//           loader: 'url-loader?limit=8192&name=img/[name].[ext]'
//       }]
//   },
//   cssnext: {
//       browsers: 'last 2 versions'
//   },
//   resolve: {
//       extensions: ['', '.js', '.jsx']
//   },
//   plugins: [
//       new Clean([path.join(__dirname, '../dist')], {
//           root: path.join(__dirname, '..'),
//           verbose: true
//       }),
//       new ExtractTextPlugin('./css/bundle.css', {allChunks: true}),
//       new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), //ignore locale files from moment.js, saves 300k
//       new webpack.DefinePlugin({
//           'process.env': {
//               'NODE_ENV': JSON.stringify('production')
//           },
//           '__DEVTOOLS__': false
//       }),
//       new webpack.optimize.UglifyJsPlugin({
//           compressor: {
//               warnings: false
//           },
//           mangle: false
//       })
//   ]
// }
