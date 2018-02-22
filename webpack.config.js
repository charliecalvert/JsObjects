var path = require("path");

module.exports = {
    entry: {
        foo: "./webpack.config.js"
    },
    module: {
        rules: [

            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/,
                enforce: "pre", // preload
                loader: "eslint-loader",
                options: {},
            },
            {
                loader: "jshint-loader",
                options: {
                    camelcase: true,
                    emitErrors: true,
                    failOnHint: true
                }
            }
        ]
    },
    output: {
        filename: "jshint.txt",
        path: path.resolve(__dirname, "out")
    }
};
