const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {
  ElementUiResolver
} = require('unplugin-vue-components/resolvers')
const path = require('path')
const ProvidePlugin = require('webpack').ProvidePlugin
const DllReferencePlugin = require('webpack').DllReferencePlugin
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const fs = require('fs')
const files = fs.readdirSync('./dll')

// 获取dll文件列表
const dllReferencePluginArray = []
const addAssetsPluginArray = []

files.forEach(item => {
  if (/\.manifest.json$/g.test(item)) {
    dllReferencePluginArray.push(new DllReferencePlugin({
      manifest: require(`./dll/${item}`)
    }))
  }

  if (/\.js$/g.test(item)) {
    addAssetsPluginArray.push(new AddAssetHtmlPlugin({
      // dll文件位置
      filepath: path.resolve(__dirname, `./dll/${item}`),
      // dll 引用路径，请使用 绝对路径！！！
      publicPath: '/dll',
      // dll最终输出的目录
      outputPath: './dll'
    }))
  }
})

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
        '@components': path.resolve('src/components')
      }
    },
    plugins: [
      // DLL预打包
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        resolvers: [ElementUiResolver()],
        imports: ['vue'],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        extensions: ['vue'],
        resolvers: [ElementUiResolver()]
      }),

      new ProvidePlugin({
        _: 'lodash',
        $is: [path.resolve(__dirname, './src/utils/is.js'), 'default'],
        $validate: [path.resolve(__dirname, './src/utils/validate.js'), 'default'],
        $util: [path.resolve(__dirname, './src/utils/index.js'), 'default'],
        $auth: [path.resolve(__dirname, './src/utils/auth.js'), 'default']
      })
    ]

  }
}