'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        //'webpack-dev-server/client?http://127.0.0.1:30025',
        //'webpack/hot/only-dev-server',
        path.join(__dirname, 'source/Titles.js')
    ],
    output: {
        path: path.join(__dirname, 'public/javascripts'),
        filename: 'bundle.js',
        hotUpdateChunkFilename: 'elven-hot-files/hot-update.js',
        hotUpdateMainFilename: 'elven-hot-files/hot-update.json'
    },
    devServer: {
        contentBase: './public',
        hot: true,
        port: 30025,
        proxy: {
            "/": "http://localhost:30026"
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": ["react", "es2015", "stage-0"]
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
