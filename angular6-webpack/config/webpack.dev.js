var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].bundle.js'
    },
    mode: 'development',
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    devServer: {
        stats: {
            chunks: false, // Makes the build much quieter
            colors: true,
            timings: true,
            children: false //removing undefined stats
        },
        contentBase: helpers.root('dist'), //contents basepath to be loaded in server
        port: 6602, //port to run dev server
        compress: false, // enable gzip compression
        historyApiFallback: true, // auto reload on compile
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        //open: true // auto open browser
    }
});