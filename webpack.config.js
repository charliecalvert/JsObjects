module.exports={
    entry: "./index.js",
    output: {
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            }
        ]
    }
};
