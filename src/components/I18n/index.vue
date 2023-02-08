<!--
* @description i18n component
* @fileName index.vue
* @author zero_fsc
* @date 2023/02/09 00:31:47
!-->
<template>
  <div class="i18n-container">
    <el-dropdown trigger="click" placement="bottom">
      <span class="el-dropdown-link">
        <i role="img" class="el-icon-s-comment"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item disabled>中文</el-dropdown-item>
        <el-dropdown-item>
          <span @click="handleChangeLanguage('en')">English</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {
    handleChangeLanguage(type) {
      console.log(type);
      this.$i18n.locale = type;
      localStorage.setItem('lang', type);
    },
  },
};
</script>
<style lang="less" scoped>
i {
  font-size: 0.225rem;
  line-height: 0.6rem;
  color: #fff;
}
</style>
