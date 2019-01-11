module.exports = {
    entry: './source/main.js',
    output: {
        path: __dirname,
        filename: 'public/javascripts/bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'stage-0']
                    }
                }
            }
        ]
    }
};
