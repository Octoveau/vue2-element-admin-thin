<template>
  <div id="app">
    <!-- <EditorComp @editor-text="getEditorText" />

    <div v-html="text"></div> -->
    <el-button @click="onSubmit">测试接口</el-button>
  </div>
</template>

<script>
import EditorComp from "@components/Editor";
import { getUserInfoData } from "@/api/userInfo";
export default {
  components: {
    EditorComp,
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
    onSubmit() {
      console.log("onSubmit");
      getUserInfoData()
        .then((res) => {
          console.log("res", res);
        })
        .catch((error) => console.log("error", error));
    },
    getEditorText(value) {
      this.text = value;
    },
  },
};
</script>

<style lang="less"></style>
