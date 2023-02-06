<template>
  <section>
    <h1>这是一个home页面,发了一个请求</h1>
  </section>
</template>

<script>
import { getUserInfoByToken } from '@/api/auth';
import authStorage from '@/utils/auth';

export default {
  data() {
    return {};
  },
  mounted() {
    const { token } = JSON.parse(authStorage.getTokenInfo());
    getUserInfoByToken(token).then((res) => {
      console.log('res', res);
    });
  },
};
</script>
