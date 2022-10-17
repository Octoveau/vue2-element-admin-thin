// const Components = require("unplugin-vue-components/webpack");
// const { ElementUiResolver } = require("unplugin-vue-components/resolvers");
const path = require("path");
const ProvidePlugin = require("webpack").ProvidePlugin;
const DllReferencePlugin = require("webpack").DllReferencePlugin;
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const fs = require("fs");
const files = fs.readdirSync("./dll");

// 获取dll文件列表
const dllReferencePluginArray = [];
const addAssetsPluginArray = [];

files.forEach((item) => {
  if (/\.manifest.json$/g.test(item)) {
    dllReferencePluginArray.push(
      new DllReferencePlugin({
        manifest: require(`./dll/${item}`),
      })
    );
  }

  if (/\.js$/g.test(item)) {
    addAssetsPluginArray.push(
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, `./dll/${item}`),
      })
    );
  }
});

module.exports = {
  lintOnSave: true,
  devServer: {
    port: process.env.VUE_APP_PORT,
    proxy: {
      "/api": {
        target: process.env.VUE_APP_TARGET_API, //代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "@components": path.resolve("src/components"),
      },
    },
    plugins: [
      // 引入DLL
      ...addAssetsPluginArray,
      ...dllReferencePluginArray,
      new ProvidePlugin({
        _: "lodash",
        $is: [path.resolve(__dirname, "./src/utils/is.js"), "default"],
        $validate: [
          path.resolve(__dirname, "./src/utils/validate.js"),
          "default",
        ],
        $util: [path.resolve(__dirname, "./src/utils/index.js"), "default"],
        $auth: [path.resolve(__dirname, "./src/utils/auth.js"), "default"],
      }),
    ],
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(path.resolve("src/assets/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
