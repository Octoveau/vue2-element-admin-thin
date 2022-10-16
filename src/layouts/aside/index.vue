<template>
  <div class="aside-container">
    <menu-comp :menuList="menuData" />
  </div>
</template>

<script>
import { menuList } from "@/mock/menu.mock";
import MenuComp from "@components/Menu";
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
.aside-container {
  height: 100%;
  ::v-deep .el-menu {
    background-color: #001529 !important;
  }
  ::v-deep .el-menu-item {
    background-color: #001529 !important;
  }
  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
}
</style>
