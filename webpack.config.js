/**
 * Created by Martynas on 1/10/2016.
 */
'use strict';

var webpack = require('webpack'),
    path = require('path');


var APP = path.join(__dirname, 'app');
var BUILD = path.join(__dirname, 'build');

module.exports = {
    devtool: "source-map",
    context: APP,

    entry: {
        app: [

            './js/bootstrap.js'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: BUILD,
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            { test: /\.css$/, loader: "style!css!" }
        ]
    }
};
