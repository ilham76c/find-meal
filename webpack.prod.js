const merge = require("webpack-merge");
const common = require("./webpack.common.js");

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
    }
});