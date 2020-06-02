const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyWebPackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            // file loader
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    // plugin
    plugins: [
        new CopyWebPackPlugin({
            patterns: [
                {
                    from: "assets",
                    to: "assets"
                }
            ],    
        }),
    ]
});