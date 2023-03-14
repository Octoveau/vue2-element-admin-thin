<template>
  <div class="setting-body__layout">
    <el-divider>
      <span>页面元素配置</span>
    </el-divider>

    <div class="setting-body__layout-content">
      <div class="item">
        <span>展示Footer</span>
        <el-switch v-model="isShowFooter" style="display: block" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
      <div class="item">
        <span>展示面包屑</span>
        <el-switch v-model="isShowBreadCrumb" style="display: block" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    isShowFooter: {
      get() {
        return this.$store.state.setting.isShowFooter;
      },

      set(value) {
        this.$store.commit('setting/handleExplicitFooter', value);
      },
    },
    isShowBreadCrumb: {
      get() {
        return this.$store.state.setting.isShowBreadCrumb;
      },

      set(value) {
        this.$store.commit('setting/handleExplicitBreadCrumb', value);
      },
    },
  },

  mounted() {},

  methods: {
    // ...mapMutations('setting', ['handleExplicitFooter']),
    // explicitFooter() {
    //   this.handleExplicitFooter(!this.isShowFooter);
    // },
  },
};
</script>
<style lang="less" scoped>
.setting-body__layout {
  padding: 0 15px;

  &-content {
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
