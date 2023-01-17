<template>
  <section class="section" element-loading-background="rgba(0, 0, 0, 0.8)" element-loading-text="获取数据中..." element-loading-spinner="el-icon-loading" v-loading="isLoading"></section>
</template> 

<script>
import { getOpenToken,getUserInfoByToken } from '@/api/auth';
import authStorage from '@/utils/auth'
export default {
  data() {
    return {
      isLoading: true,
      loginConfig: {
        siteKey: process.env.VUE_APP_TARGET_SITE_KEY,
        siteSecret: process.env.VUE_APP_TARGET_SITE_SECRET,
        ticket: '',
      },
    };
  },
  methods: {
    hanldeLogin() {
      //已经登录成功
      if (this.loginConfig.ticket) {
        getOpenToken(this.loginConfig).then((res) => {
         if(res.code===200){
           authStorage.setTokenInfo(res.data)
           this.getUserInfo(res.data.token)
         }
        });
      } else {
        //需要跳转到单点登录平台
        window.location.replace(`http://www.octoveau.cn/sso-login/openLogin/${this.loginConfig.siteKey}`)
      }
    },
    getUserInfo(token){
        getUserInfoByToken(token).then(res=>{
         authStorage.setUserInfo(res.data)
         this.$router.push({
          name:'DashBoard'
         })
        })
    }
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
