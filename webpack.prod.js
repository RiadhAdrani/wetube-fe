const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const mode = "production";

module.exports = merge(common, {
    mode,
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "docs"),
        publicPath: "/",
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new HTMLWebpackPlugin({
                template: "./public/index.html",
                filename: "index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
            new HTMLWebpackPlugin({
                template: "./public/index.html",
                filename: "404.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            "typeof window": JSON.stringify("object"),
            "process.env.NODE_ENV": JSON.stringify(mode),
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [],
    },
});
