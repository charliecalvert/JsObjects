//var path = require('path');
//var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: __dirname + '/source/main.js',
    output: {
        path: __dirname,
        filename: 'public/bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
};
