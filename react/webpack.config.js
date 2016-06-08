var path = require('path');
var webpack = require('webpack');
var config = {
  entry: {
    main: ['./react/src/main.js', "./react/src/datatypeAjax.js"]
  },
  output: {
    path: './app/assets/javascripts',
    filename: '[name].js',
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common-bundle.js')
  ],
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  delete config.devtool;
  var webpack = require('webpack');
  config.plugins = [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' })
  ];
}

module.exports = config;
