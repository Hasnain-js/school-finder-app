// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            pages: path.resolve(__dirname, 'src/pages'),
            layouts: path.resolve(__dirname, 'src/layouts'),
            assets: path.resolve(__dirname, 'src/assets'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    // `.swcrc` can be used to configure swc
                    loader: 'swc-loader',
                }
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
              },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    plugins: [
        // new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"),
        }),
    ],
    devServer: {
        //contentBase: path.join(__dirname, "dist"),
        port: 3000,
        open: true,
        liveReload: true,
        historyApiFallback: true,
    },
};