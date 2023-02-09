<template>
  <div class="main-container">
    <bread-crumb />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@components/BreadCrumb';

export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.main-container {
  position: relative;
  margin: 0 0 0.15rem 0.3rem;
  width: calc(100% - 0.6rem);
  height: calc(100% - 0.3rem);

  .main-content {
    width: 100%;
    height: calc(100% - 0.45rem);
    border-radius: 5px;
  }
}
</style>
