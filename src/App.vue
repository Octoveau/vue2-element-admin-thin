<template>
  <div id="app">
    <EditorComp @editor-text="getEditorText" />

    <div v-html="text"></div>
  </div>
</template>

<script>
import EditorComp from "@components/Editor";
export default {
  components: {
    EditorComp
  },
  data() {
    return {
      text: "",
    };
  },

  mounted() {
    console.log($auth.getUserToken());
  },

  methods: {
    getEditorText(value) {
      this.text = value
    }
  }
};
</script>

<style lang="less">
</style>
