const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),        
        filename: "bundle.js"
    },    
    module: {
        rules: [
            // style and css loader
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }, 
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    // Disables attributes processing
                    attributes: false,
                },                                  
            }          
        ]
    },
    // plugin
    plugins: [
        // HTML Webpack Plugin
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/categories.html",
            filename: "categories.html"
        }),
    ]
}