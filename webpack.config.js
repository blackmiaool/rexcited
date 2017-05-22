const path = require('path');
const webpack = require('webpack');


const config = {
    entry: {
        'react': './src/react',
        'react-dom': './src/react-dom'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['latest', 'stage-0', 'react'],
                plugins: []
            },
            }, {
            test: /\.json$/,
            loader: "json-loader"
            }]
    },
    resolve: {
        alias: {
            react: path.resolve(path.join(__dirname, 'src', 'react', 'react')),
        },
    },
    plugins: [new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }), new webpack.optimize.CommonsChunkPlugin({
        name: "react",
        minChunks: Infinity,
    })],
    devtool: false,
    watch: true,
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        filename: "[name].js"
    },
};

module.exports = config;
