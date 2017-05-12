const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'app': './index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: [
          'es2015',
          'react'
        ],
                plugins: []
            },
            //            include: [
            //        path.resolve(__dirname, 'test')
            //      ]
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
    resolve: {
        modules: [
      path.join(process.cwd(), 'app'),
      'node_modules'
    ],
        extensions: ['.js', '.json']
    },
    devtool: false,
    watch: true
};