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
      // {
      //   test: /\.css$/,
      //   use: [
      //     prod ? MiniCssExtractPlugin.loader : "style-loader",
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: {
      //           mode: "local",
      //           auto: true,
      //           exportGlobals: true,
      //           localIdentName: "[path][name]__[local]--[hash:base64:5]",
      //           localIdentContext: path.resolve(__dirname, "src"),
      //           localIdentHashSalt: "my-custom-hash",
      //           namedExport: true,
      //           exportLocalsConvention: "camelCase",
      //           exportOnlyLocals: false, 
      //         }
      //       }
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
};