'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.join(__dirname, 'source/index.js')
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": ["es2015", "stage-0"]
            }
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    devtool: "source-map"
};
