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
        <el-dropdown-item v-for="(item, index) in langOptions" :key="index" :disabled="item.lang === lang">
          <span @click="handleChangeLanguage(item.lang)">{{ item.label }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: localStorage.getItem('lang') || 'zh',
      langOptions: [
        { lang: 'zh', label: '中文' },
        { lang: 'en', label: 'English' },
      ],
    };
  },

  computed: {},

  mounted() {},

  methods: {
    handleChangeLanguage(lang) {
      this.$i18n.locale = lang;
      this.lang = lang;
      localStorage.setItem('lang', lang);
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
