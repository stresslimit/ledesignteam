var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var customProperties = require('postcss-custom-properties')
var nested = require('postcss-nested')
var autoprefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var csswring = require('csswring')

// var production = process.env.NODE_ENV === 'production'
var production = true

var plugins = production ? [ new ExtractTextPlugin('style.css', { allChunks: true }) ] : []
var cssloader = production
                ? ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')
                : 'css?importLoaders=1!postcss'



module.exports = {
  entry: {
    out: ['./_css']
  },
  output: {
    path: __dirname + '/assets/',
    filename: '[name].js'
  },
  debug: true,
  plugins: plugins,
  module: {
    loaders: [
      { test: /\.css$/, loader: cssloader }
    ]
  },
  postcss: [postcssImport, customProperties, nested, autoprefixer, csswring]
}
