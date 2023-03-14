<template>
  <el-container direction="vertical">
    <el-header class="layout-header">
      <header-comp />
    </el-header>
    <el-container class="layout-container">
      <el-aside>
        <aside-comp />
      </el-aside>
      <div style="overflow: hidden; width: 200px; min-width: 200px; max-width: 200px; transition: all 0.2s ease 0s; flex: 0 0 200px"></div>
      <el-container class="layout-main-container">
        <el-main>
          <content-comp />
        </el-main>
        <el-footer v-show="isShowFooter">
          <footer-comp />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex';
import HeaderComp from './header';
import ContentComp from './content';
import AsideComp from './aside';
import FooterComp from './footer';

export default {
  components: {
    HeaderComp,
    ContentComp,
    AsideComp,
    FooterComp,
  },
  data() {
    return {};
  },

  computed: {
    ...mapState('setting', ['isShowFooter']),
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="less" scoped>
.layout-header {
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 0.6rem !important;
  background-color: #fff;
  border: 0;
  line-height: 0.6rem !important;
}

.layout-container {
  position: relative;
  top: 0.6rem;

  .el-aside {
    position: fixed;
    width: 200px;
    min-width: 200px;
    max-width: 200px;
    height: 100%;
    flex: 0 0 200px;
  }
}
</style>
