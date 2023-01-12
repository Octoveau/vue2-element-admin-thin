<template>
  <section class="section" element-loading-background="rgba(0, 0, 0, 0.8)" element-loading-text="获取数据中..." element-loading-spinner="el-icon-loading" v-loading="isLoading"></section>
</template> 

<script>
import { getOpenToken } from '@/api/auth';
export default {
  data() {
    return {
      isLoading: true,
      loginConfig: {
        siteKey: '5ba7b6fe36a04ce0bab97f103907123f',
        siteSecret: '1ff77c23c2ea440d84ab17505b4588026233c709bf5d489aae07cd3b788999e1',
        ticket: '',
      },
    };
  },
  methods: {
    hanldeLogin() {
      //已经登录成功
      if (this.loginConfig.ticket) {
        getOpenToken(this.loginConfig).then((res) => {
          console.log('res', res);
        });
      } else {
        //需要跳转到单点登录平台
      }
    },
  },
  mounted() {
    this.loginConfig.ticket = this.$route.query['ticket'] || '';
    this.hanldeLogin();
  },
};
</script>

<style lang="less" scoped>
.section {
  width: 100vw;
  height: 100vh;
}
</style>
