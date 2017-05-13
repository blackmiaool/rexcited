const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'app': './index.jsx'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
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
            'react-dom': path.resolve(path.join(__dirname, 'src', 'react-dom', 'react-dom')),
        },
        //                root: "."
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index0.bundle.js'
    },
    plugins: [
                    new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
            ],

    devtool: false,
    watch: true
};