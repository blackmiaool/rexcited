const path = require('path');
const webpack = require('webpack');


const config = {
    entry: {
        'react': ['./src/react'],
        'react-dom': ['./src/react-dom']
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
        names: ["react"],
    })],
    devtool: false,
    watch: true,
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        filename: "[name].js",
        libraryTarget: 'umd'
    },
};
const testConfig = {
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
            'react/lib': path.resolve(path.join(__dirname, 'src', 'react', 'lib')),
            'react-dom/lib': path.resolve(path.join(__dirname, 'src', 'react-dom', 'lib')),
            react: path.resolve(path.join(__dirname, 'dist', 'react.js')),
            'react-dom': path.resolve(path.join(__dirname, 'dist', 'react-dom.js')),
        },
    },
    plugins: [new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })],
    devtool: false,
    watch: true,
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        filename: "[name].js"
    },
};
module.exports = [config, testConfig];
