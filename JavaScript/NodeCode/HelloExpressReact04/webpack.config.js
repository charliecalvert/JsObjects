'use strict';

var path = require('path');
//var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        //'webpack-hot-middleware/client',
        path.join(__dirname, 'source/main.js')
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": [
                    "react",
                    "es2015",
                    "stage-0"
                    //"react-hmre"
                ]
            }
        }, {
            test: /\.json?$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }, {
            test: /\.rt$/,
            loader: "react-templates-loader?modules=amd"
        }]
    },
    plugins: [
        //new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
       // new webpack.NoEmitOnErrorsPlugin(),
       // new webpack.DefinePlugin({
       //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
       // })
    ]
};
