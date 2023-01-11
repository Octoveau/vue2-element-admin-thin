<template>
  <section></section>
</template>

<script>
export default {
  data() {
    return {
      loginConfig: {
        siteKey: '5ba7b6fe36a04ce0bab97f103907123f',
      },
    }
  },
  methods: {
    hanldeLogin() {
      console.log(this.$route.params['ticket'])
      //存在tickets时候获取信息
      if (this.$route.params['ticket']) {
      }
      //跳转到sso
      else {
      }
    },
  },
  mounted() {
    this.hanldeLogin()
  },
}
</script>

<style lang="scss" scoped></style>
