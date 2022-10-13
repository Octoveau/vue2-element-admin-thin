<template>
  <el-container direction="vertical">
    <el-header>
      <header-comp />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <aside-comp />
      </el-aside>
      <el-main>
        <content-comp />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeaderComp from "./header";
import ContentComp from "./content";
import AsideComp from "./aside";
export default {
  components: {
    HeaderComp,
    ContentComp,
    AsideComp,
  },
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
</style>
