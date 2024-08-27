//var path = require('path');
//var webpack = require('webpack')
// import HtmlWebpackPlugin from 'html-webpack-plugin';

console.log(__dirname);
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.(js)?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader']
            },
        ],
    }
};
