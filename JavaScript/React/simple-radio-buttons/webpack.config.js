//var path = require('path');
//var webpack = require('webpack')
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
                test: /.(js|jsx)?$/,
                use: {
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'jsx',
                        target: 'es2015'
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
            resolve: {
                extensions: ['.js', '.jsx']
            },
        ],
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]

    }
};
