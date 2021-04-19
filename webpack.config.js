module.exports = {
    entry: "./assets/js/app.js",
    output: {
        filename: "main.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                }
            ]
        }]
    }
}