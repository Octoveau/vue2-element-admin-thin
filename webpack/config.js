/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const { DllReferencePlugin } = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const files = fs.readdirSync('webpack/dll');

// 获取dll文件列表
const dllReferencePluginArray = [];
const addAssetsPluginArray = [];

files.forEach((item) => {
  if (/\.manifest.json$/g.test(item)) {
    dllReferencePluginArray.push(
      new DllReferencePlugin({
        // eslint-disable-next-line import/no-dynamic-require
        manifest: require(`./dll/${item}`),
      }),
    );
  }

  if (/\.js$/g.test(item)) {
    addAssetsPluginArray.push(
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, `./dll/${item}`),
      }),
    );
  }
});

module.exports = { dllReferencePluginArray, addAssetsPluginArray };
