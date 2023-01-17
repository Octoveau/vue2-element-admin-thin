<template>
  <div></div>
</template>

<script>
import authStorage from '@/utils/auth'

export default {
  data() {
    return {
       siteKey: '5ba7b6fe36a04ce0bab97f103907123f',
    }
  },


  methods: {
    handleLogout(){
      let tokenInfo=JSON.parse(authStorage.getTokenInfo()) 
       authStorage.removeUserInfo()
       authStorage.removeTokenInfo()
       if(tokenInfo){
           //组装数据跳转到sso登出系统
         window.location.replace(`http://www.octoveau.cn/sso-login/openLogout/${tokenInfo.token}?sitekey=${this.siteKey}`)
       }
       else{
        this.$router.push({
          name:'Login'
        })
       }
       
    }
  },
  mounted(){
    this.handleLogout()
  }
}
</script>

<style></style>
