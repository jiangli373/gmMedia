var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: [
      //'webpack/hot/only-dev-server',
      //'webpack-dev-server/client?http://localhost:8080',
       './app/main.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
    loaders: [ 
    { // 参照的这个日志（http://jamesknelson.com/unlocking-decorators-and-other-es7-features-with-webpack-and-babel/）里的评论
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
    }
      ]
  }
};

