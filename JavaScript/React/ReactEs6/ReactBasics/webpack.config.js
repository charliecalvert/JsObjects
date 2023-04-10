// var path = require('path');
// var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },
};
