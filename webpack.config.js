const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: "./assets/js/app.js",
    output: {
        filename: "main.js",
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use:
                {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
        }]
    },
    plugins: [
        new UglifyJSPlugin()
    ]
}