const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    common: ['lodash', 'moment', 'axios'],
  },
  output: {
    filename: '[name].js', //  产生的文件名字
    path: path.resolve(__dirname, 'dll'),
    library: '[name]', //  导出的js文件  库名字叫做 ab
    libraryTarget: 'var', // comomjs 规范
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]', // 要和output输出文件名字同名
      path: path.resolve(__dirname, 'dll', '[name].manifest.json'),
    }),
  ],
};
