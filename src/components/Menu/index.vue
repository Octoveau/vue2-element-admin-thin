<template>
  <el-menu :default-active="defaultActive" :unique-opened="true" :router="true">
    <menu-item :menuList="menu"></menu-item>
  </el-menu>
</template>
<script>
import menuItem from "./menuItem";
export default {
  name: "Menu",
  components: { menuItem },
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    menu() {
      return this.menuList;
    },

    defaultActive() {
      const { meta, path } = this.$route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
};
</script>
