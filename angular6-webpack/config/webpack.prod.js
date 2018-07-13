const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpackCommon = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(webpackCommon, {
    devtool: 'source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].bundle.js'
    },
    mode: 'production',
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        new UglifyJsPlugin({ sourceMap: true }),
    ],
    performance: {
        hints: "warning", // enum
        maxAssetSize: 1500000, // int (in bytes),
        maxEntrypointSize: 4000000, // int (in bytes)
        assetFilter: function (assetFilename) {
            // Function predicate that provides asset filenames
            return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
        }
    },
    stats: {
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: true
    },
});