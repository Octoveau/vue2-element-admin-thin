<template>
  <div></div>
</template>

<script>
import authStorage from '@/utils/auth';

export default {
  data() {
    return {
      siteKey: process.env.VUE_APP_TARGET_SITE_KEY,
    };
  },
  mounted() {
    this.handleLogout();
  },

  methods: {
    handleLogout() {
      const tokenInfo = JSON.parse(authStorage.getTokenInfo());
      authStorage.removeUserInfo();
      authStorage.removeTokenInfo();
      if (JSON.parse(authStorage.getIsSsoLoginInfo())) {
        // 组装数据跳转到sso登出系统
        window.location.replace(`http://www.octoveau.cn/sso-login/openLogout/${tokenInfo.token}?sitekey=${this.siteKey}`);
      } else {
        this.$router.push({
          name: 'Login',
        });
      }
    },
  },
};
</script>
