var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, './src/app.js')
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '报名列表',
            template: './src/template/index.ejs',
            inject: 'body',
            filename: 'index.html'
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    devServer: {
        inline: true
    }
}