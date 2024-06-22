const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: {
    app: ['./src/index.tsx'],
    vendor: ['react', 'react-dom']
 },
  output: {
    path: __dirname + '/dist/',
    filename: 'js/[name]_[contenthash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|tff)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                outputPath: 'assets',
                name: '[name]_[contenthash].[ext]',
            },
          },
        ],
      },
    ]
  },
  devtool: prod ? undefined : 'inline-source-map',
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
        patterns: [
          {
            from: "public/**/*",
            globOptions: {              
                ignore: ["**/index.html"],
            },
            to: './',
          },
        ],
      }),
  ],
};

