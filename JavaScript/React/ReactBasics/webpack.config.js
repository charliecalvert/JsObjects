var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: "#inline-source-map",
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['env', 'react']}
            }
        ]
    },
};
