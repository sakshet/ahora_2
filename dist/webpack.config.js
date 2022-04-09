const path = require('path');
const prod = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.tsx',
    mode: prod ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    prod ? {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true,
                                localIdentName: "[name]--[hash:base64:5]",
                            },
                        },
                    } : {
                        loader: "style-loader",
                        options: {
                            esModule: true,
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            esModule: true,
                            modules: {
                                namedExport: true,
                                localIdentName: "[name]--[hash:base64:5]",
                            },
                        },
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: prod ? undefined : 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        prod && new MiniCssExtractPlugin({ filename: "bundle.min.css" })
    ].filter(Boolean),
};
