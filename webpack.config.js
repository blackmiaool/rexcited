const path = require('path');
const webpack = require('webpack');


const config = {
    entry: {
        'react': ['./src/react', './src/react-dom'],
        'todo': './test/index.jsx'
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
            'react-dom': path.resolve(path.join(__dirname, 'src', 'react-dom', 'react-dom')),
        },
    },
    plugins: [new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }), new webpack.optimize.CommonsChunkPlugin({
        names: "react",
    })],
    devtool: false,
    watch: true,
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        filename: "[name].js"
    },
};
const originalConfig = {
    entry: {
        'todo': './test/index.jsx'
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
            //            react: path.resolve(path.join(__dirname, 'src', 'react', 'react')),
            //            'react-dom': path.resolve(path.join(__dirname, 'src', 'react-dom', 'react-dom')),
        },
    },
    plugins: [new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })],
    devtool: false,
    watch: true,
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        filename: "[name].original.js"
    },
};
module.exports = [config, originalConfig];
