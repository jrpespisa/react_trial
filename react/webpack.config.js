var path = require('path');
var webpack = require('webpack');
var config = {
  entry: {
    main: './react/src/main.js',
    comments: './react/src/comments.js'
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
//
// var config = module.exports = {
//   context: __dirname,
//   entry: {
//     mainEntry: '../react/entry.js',
//     index: '../react/src/main.js'
//   }
// };
//
// module.loaders = [{
//   test: /\.jsx?$/,
//   exclude: /node_modules/,
//   loader: 'babel'
// }];
//
// config.output = {
//   path: 'app/assets/javascripts',
//   filename: '[name].js',
//   publicPath: '/assets'
// };
//
// config.resolve = {
//   extensions: ['', '.js'],
//   modulesDirectories: ['node_modules', 'react']
// };
//
// config.plugins = [
//   // we need this plugin to teach webpack how to find module entry points for bower files,
//   // as these may not have a package.json file
//   new webpack.ResolverPlugin([
//     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
//   ]),
//
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
