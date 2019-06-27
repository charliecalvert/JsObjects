module.exports = {
    mode: 'development',
    entry: './Source/index01.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
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
    node: {
        fs: 'empty'
    }
};
