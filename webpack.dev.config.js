const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config');

const BASE_URL_DEV = 'http://localhost:8080';
const BASE_URL_PRO = 'http://localhost:8080';
const BASE_URL = process.env.NODE_ENV === 'development' ? BASE_URL_DEV : BASE_URL_PRO;

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ],
  },
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  devServer: {
    port: 9001,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: BASE_URL,
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ],
};

module.exports = merge({
  customizeArray(a, b, key) {
    /*entry.app不合并，全替换*/
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);

