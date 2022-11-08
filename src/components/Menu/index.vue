<template>
  <el-menu
    :default-active="defaultActive"
    :unique-opened="true"
    popper-append-to-body
    class="el-menu-vertical-demo"
    background-color="#001529"
    text-color="#fff"
    :router="true"
  >
    <menu-item :menuList="menu"></menu-item>
  </el-menu>
</template>
<script>
import menuItem from './menuItem'

export default {
  name: 'Menu',
  components: { menuItem },
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    menu() {
      return this.menuList
    },

    defaultActive() {
      const { path } = this.$route
      if (path) {
        return path
      }
      return 'DashBoard'
    },
  },
}
</script>
