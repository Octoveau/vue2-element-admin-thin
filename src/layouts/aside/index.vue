<template>
  <div class="ov-layout-aside">
    <menu-comp :menu-list="menuData" />
  </div>
</template>

<script>
import MenuComp from '@components/Menu';
import { menuList } from '@/mock/menu.mock';

export default {
  components: {
    MenuComp,
  },
  data() {
    return {};
  },

  computed: {
    menuData() {
      return menuList;
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.ov-layout-aside {
  height: 100%;

  ::v-deep .el-menu {
    background-color: #001529 !important;
  }
  // ::v-deep .el-menu-item {
  //   background-color: #001529 !important;
  // }
  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
}
</style>
