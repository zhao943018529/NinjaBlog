const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    entry: {
        index: './src/index.tsx'
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new copyWebpackPlugin([{
            from: __dirname + '/src/style/images',
            to: __dirname + '/dist/images'
        }]),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        port: 8080,
        hot: true,
        hotOnly: true,
        proxy: {
            "/agents": "http://localhost:3001",
        },
        historyApiFallback: true,
    }
}