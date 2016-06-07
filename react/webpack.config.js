var path = require('path');
var webpack = require('webpack');
var config = {
  entry: {
    main: './react/src/main.js',
    comments: [
     './react/src/comments.js',
     './react/src/multitest.js'
   ]
  },
  output: {
    path: './app/assets/javascripts',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devtool: 'eval-source-map'
}
//   new webpack.ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery'
//   }),
//   new webpack.optimize.CommonsChunkPlugin('common-bundle.js')
// ];

if (process.env.NODE_ENV === 'production') {
  delete config.devtool;
  var webpack = require('webpack');
  config.plugins = [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
  ];
}

module.exports = config;
