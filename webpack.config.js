const path = require('path');
const webpack = require('webpack');

console.log("my webpack");
var config = {
    entry: {
        //        'app': './test/index.js'
        'app': './index.jsx'
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
    plugins: [
                    new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
            ],

    devtool: false,
    watch: true
};

var test0Config = Object.assign({}, config, {
    name: "a",
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        filename: "index0.bundle.js"
    },
    resolve: {

        extensions: ['.js', '.jsx'],

        alias: {
            react: path.resolve(path.join(__dirname, 'src', 'react', 'react')),
            'react-dom': path.resolve(path.join(__dirname, 'src', 'react-dom', 'react-dom')),
            "react-transition-group": path.resolve(path.join(__dirname, 'react-transition-group', 'src')),
//            'rc-queue-anim': path.resolve(path.join(__dirname, 'queue-anim', 'src')),
            //            'rc-tween-one': path.resolve(path.join(__dirname, 'tween-one', 'src')),
        },
        //                root: "."
    },
});
var testConfig = Object.assign({}, config, {
    name: "b",
    output: {
        path: path.resolve(path.join(__dirname, 'dist')),
        filename: "index.bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "react-transition-group": path.resolve(path.join(__dirname, 'react-transition-group', 'src')),
//            'rc-queue-anim': path.resolve(path.join(__dirname, 'queue-anim', 'src')),
            //            'rc-tween-one': path.resolve(path.join(__dirname, 'tween-one', 'src')),
        },
        //                root: "."
    },
});

// Return Array of Configurations
module.exports = [
    test0Config, testConfig,
]



//module.exports = {
//    entry: {
//        'app': './index.jsx'
//    },
//
//    module: {
//        loaders: [{
//            test: /\.jsx?$/,
//            loader: 'babel-loader',
//            query: {
//                presets: ['es2015', 'react'],
//                plugins: []
//            },
//                }, {
//            test: /\.json$/,
//            loader: "json-loader"
//                }]
//    },
//    resolve: {
//        alias: {
//            react: path.resolve(path.join(__dirname, 'src', 'react', 'react')),
//            'react-dom': path.resolve(path.join(__dirname, 'src', 'react-dom', 'react-dom')),
//        },
//        //                root: "."
//    },
//    output: {
//        path: path.resolve(__dirname, 'dist'),
//        filename: 'index0.bundle.js'
//    },
//    plugins: [
//                    new webpack.DefinePlugin({
//            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
//        }),
//            ],
//
//    devtool: false,
//    watch: true
//};