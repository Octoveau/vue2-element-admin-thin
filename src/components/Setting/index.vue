<!--
* @description Setting component
* @fileName index.vue
* @author zero_fsc
* @date 2023/03/11 00:05:10
!-->
<template>
  <div class="setting-container">
    <i role="img" class="el-icon-setting" @click="handleExplicitDrawer"></i>
    <el-drawer title="全局配置" :visible.sync="drawer" :modal-append-to-body="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },

  computed: {},

  mounted() {},

  methods: {
    handleExplicitDrawer() {
      this.drawer = true;
    },
  },
};
</script>
<style lang="scss" scoped></style>
