<template>
  <div id="app">
    <el-input v-model="text"></el-input>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "@components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      text: "",
    };
  },

  mounted() {
    console.log($auth.getUserToken());
  },
};
</script>

<style lang="less">
</style>
