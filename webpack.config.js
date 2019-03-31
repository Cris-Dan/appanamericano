const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './frontend/index.js',
    output: {
        path: __dirname + '/backend/public',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use:
                    [
                        devMode ? 'style-loader' :MiniCssExtractPlugin.loader,
                        'css-loader'
                    ],
                test: /\.css/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename:'css/bundle.css'
        })
    ]
};