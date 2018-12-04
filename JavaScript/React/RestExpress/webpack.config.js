//var path = require('path');
//var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        filename: './src/index.js'
    },
    output: {
        path: __dirname,
        filename: './public/javascripts/bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
