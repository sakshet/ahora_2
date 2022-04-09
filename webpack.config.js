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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              modules: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
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
    new MiniCssExtractPlugin()
  ],
};

// const prod = process.env.NODE_ENV === 'production';

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');

// module.exports = {
//   mode: prod ? 'production' : 'development',
//   entry: './src/index.tsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/'
//   },
//   devServer: {
//     historyApiFallback: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         resolve: {
//           extensions: ['.ts', '.tsx', '.js', '.json'],
//         },
//         use: 'ts-loader',
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               esModule: false
//             }
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1,
//               modules: true
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//       },
//     ]
//   },
//   devtool: prod ? undefined : 'source-map',
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'index.html'
//     }),
//     new MiniCssExtractPlugin()
//   ],
// };
