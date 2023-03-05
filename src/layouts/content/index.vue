<template>
  <div class="ov-layout-main">
    <div class="ov-layout-main__tab">
      <span>这里是标签页</span>
    </div>
    <div class="ov-layout-main__content">
      <router-view />
      <footer-comp />
    </div>
  </div>
</template>

<script>
import FooterComp from '../footer';

export default {
  components: {
    FooterComp,
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
.ov-layout-main {
  position: relative;

  &__tab {
    padding: 0 5px;
    height: 0.375rem;
    text-align: left;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    line-height: 0.375rem;
  }

  &__content {
    overflow: auto;
    max-height: 10.25rem;
    border-radius: 5px;
  }
}
</style>
