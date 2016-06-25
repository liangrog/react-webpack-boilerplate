var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {
    devtool: "eval",
    entry: {
        app: [path.join(__dirname, "src/app.js")],
        vendor: ["react", "react-dom"],
    },
    output: {
        path: path.join(__dirname, "build/assets"),
        publicPath: "/assets/",
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!postcss!sass')
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
                loader: "file?name=images/img-[sha512:hash:base64:12].[ext]"
            },
            {
                test: /\.woff$|\.ttf$|\.eot$|\.woff2$/,
                loader: "file?name=fonts/font-[sha512:hash:base64:12].[ext]"
            },
            {
                test: /\.wav$|\.mp3$/,
                loader: "file?name=medias/media-[sha512:hash:base64:12].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            title: 'React-Webpack-Boilderplate',
            filename: path.join(__dirname, "build/index.html"),
            template: 'src/index.ejs',
            hash: true
        }),
        new ExtractTextPlugin('css/style.css', {allChunks: true}),
        new CopyWebpackPlugin([
            {
                from: 'src/.htaccess', to: '../'
            }
        ])
    ]
};
