const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = {
    entry: {
        app: './client/app/app.js'
    },
    devtool: 'source-map',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'client/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
        ]
    }
};