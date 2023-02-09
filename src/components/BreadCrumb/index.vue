<template>
  <div class="bread-crumb-container">
    <el-breadcrumb spellcheck="/" class="breadcrumb-inner">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :key="index">
          <span v-if="index == breadCrumbList.length - 1" class="no-redirect">
            {{ item.meta.title }}
          </span>
          <a v-else @click.prevent="handleJumpLink(item)">
            {{ item.meta.title }}
          </a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbList: [],
    };
  },

  watch: {
    $route() {
      return this.getBreadCrumbList();
    },
  },
  created() {
    this.getBreadCrumbList();
  },
  methods: {
    // 获取面包屑列表
    getBreadCrumbList() {
      let route = this.$route.matched.filter((item) => item.meta && item.meta.title);
      const first = route[0];

      if (!this.isDashBoard(first)) {
        route = [{ path: '/dashboard', meta: { title: 'DashBoard' } }].concat(route);
      }

      this.breadCrumbList = route.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false);
    },

    // 是否为Dashboard
    isDashBoard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
    },

    // 跳转
    handleJumpLink(item) {
      this.$router.push(item.path);
    },
  },
};
</script>

<style lang="less" scoped>
.bread-crumb-container {
  padding: 12px 0;
}
</style>
