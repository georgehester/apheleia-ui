/*
    Imported module(s)
*/
const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const fileManagerPlugin = require('filemanager-webpack-plugin');

/*
    Sass import file
*/
const sassFiles = [
    './src/import.scss'
];

/*
    Webpack configuration
*/
module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        apheleia: sassFiles
    },/*
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].build.js'
    },*/
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }/*,
            {
                test: /\.tsx?$/i,
                use: {
                    loader: 'ts-loader'
                }
            }*/
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: '[name].build.css'
        })/*,
        new fileManagerPlugin({
            events:{
                onEnd: {
                    delete: [
                        './build/remove.build.js'
                    ]
                }
            }
        })*/
    ],
    resolve: {
        extensions: ['.scss'/*, '.ts', '.js'*/]
    }
};