<template>
  <div></div>
</template>

<script>
import authStorage from '@/utils/auth';

export default {
  data() {
    return {
      timer: null,
    };
  },
  created() {
    this.openFullScreen2();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: '正在退出登录...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.65)',
      });
      this.timer = setTimeout(() => {
        loading.close();
        authStorage.removeUserInfo();
        this.$router.push({
          name: 'Login',
        });
      }, 2000);
    },
  },
};
</script>

<style></style>
