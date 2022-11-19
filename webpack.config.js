const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  /**
   * Generic contants
   */
  const projectName = 'datasins';

  /**
   * Determine if is production mode from the command executed
   */
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
              test: /\.ts?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    'sass-loader'
                ]
            },
        ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: isProduction ? projectName + '.min.js' : projectName + '.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'our project',
        template: 'src/index.html'
      }),
      new MiniCssExtractPlugin({
          filename: isProduction ? projectName + '.min.css' : projectName + '.css'
      }),
      new CopyPlugin({
          patterns: [
              { from: "src/assets", to: "assets", noErrorOnMissing: true }
          ]
      }),
    ],

    devServer: {
      static: path.join(__dirname, "dist"),
      compress: true,
      port: 4000,
    },
  }
};