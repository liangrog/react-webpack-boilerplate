var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var config = require('./webpack.config');
var port = 8080;

config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + port + "/");

new WebpackDevServer(webpack(config), {
    contentBase: path.resolve(__dirname, 'build/'),
    publicPath: config.output.publicPath,
    hot: false,
    historyApiFallback: true,
    compress: true,
    stats: {
        colors: true,
        hash: true,
        timings: true,
        chunks: false
    }
}).listen(port, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Webpack dev server is listening at localhost:' + port);
});
