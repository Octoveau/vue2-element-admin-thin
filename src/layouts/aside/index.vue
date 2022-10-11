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

<style lang="less">
.aside-container {
  height: 100%;
  text-align: left;
}
</style>
