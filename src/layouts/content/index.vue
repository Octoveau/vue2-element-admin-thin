<template>
  <div class="main-container">
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
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
  margin: 0px 0px 12px 24px;
  width: calc(100% - 48px);
  height: calc(100% - 24px);
  position: relative;

  .main-content {
    width: 100%;
    height: calc(100% - 36px);
    border-radius: 5px;
  }
}
</style>
