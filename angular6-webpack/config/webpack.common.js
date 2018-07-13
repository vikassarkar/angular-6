var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                app: { test: "app", name: "app.chunk", chunks: 'all', enforce: true },
                vendor: { test: "vendor", name: "vendor.chunk", chunks: 'all', enforce: true },
                polyfills: { test: "polyfills", name: "polyfills.chunk", chunks: 'all', enforce: true }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: helpers.root('src', 'tsconfig.json') }
                }, 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.(css|scss|sass)$/,
                exclude: helpers.root('src', 'app'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader?sourceMap", "sass-loader?sourceMap"]
                })
            },
            {
                test: /\.(css|scss|sass)$/,
                include: helpers.root('src', 'app'),
                use: "raw-loader"
            }
        ]
    },
    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /\@angular(\\|\/)core(\\|\/)fesm5/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new HtmlWebpackPlugin({
            showErrors: true,
            minify: false,
            hash: true,
            path: helpers.root('dist'),
            title: "Angular App",
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};