// webpack.config.mjs
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { fileURLToPath } from 'url';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

// Needed because __dirname doesn't exist in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  // Entry point
  entry: './src/index.js',

  // Output bundle
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]', // images/fonts handled here
    clean: true,
  },

  // Development mode by default
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // JS + Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // CSS loader (import './style.css')
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      // Images (import image from './img/img.png')
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new FaviconsWebpackPlugin('./src/img/favicon.png'),

    new CleanWebpackPlugin(),
  ],

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
  },
};
