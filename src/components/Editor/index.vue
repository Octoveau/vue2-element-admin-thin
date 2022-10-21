<template>
  <div id="editor" ref="editor"></div>
</template>

<script>
import Editor from 'wangeditor'
import { initText, editorMenus, editorFonts, editorColors } from './config'

export default {
  name: 'Editor',
  data() {
    return {
      editor: null,
      token: '',
      txt: '',
      initTxt: initText,
    }
  },

  mounted() {
    this.initEditor()
  },

  methods: {
    /*
     * @description 初始化Editor
     */
    initEditor() {
      this.$nextTick(() => this.createEditor())
    },

    /*
     * @description 创建Editor
     */
    createEditor() {
      this.editor = new Editor('#editor')
      const customConfig = {
        // 允许跨域
        withCredentials: true,
        // Token
        uploadImgHeaders: {},
        // 文件名
        uploadFileName: 'file',
        // 上传图片
        uploadImgHooks: {
          customInsert: insertImg => {
            // 设置图片上传地址 回显图片
            // const URL = ''
            insertImg(URL)
          },
        },
        // 菜单
        menus: editorMenus,
        // 颜色
        colors: editorColors,
        // 字体
        fontNames: editorFonts,
        height: 500,
      }

      Object.assign(this.editor.config, customConfig)

      this.editor.create()

      this.editor.config.onchange = text => this.$emit('editor-text', text)

      this.setHtml()
    },

    setHtml(txt = this.initTxt) {
      this.editor.txt[`${$validate.validateHtml(txt) ? 'html' : 'text'}`](txt)
    },
  },
}
</script>
