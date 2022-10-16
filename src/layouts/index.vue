<template>
  <el-container direction="vertical">
    <el-header>
      <header-comp />
    </el-header>
    <el-container>
      <el-aside width="2.5rem">
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
::v-deep .el-header {
  height: 0.6rem !important;
  line-height: 0.6rem !important;
  background-color: #001529;
  border: 0;
}
</style>
