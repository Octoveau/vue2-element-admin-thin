<template>
  <div class="main-container">
    <div class="tab-page-container">
      <span>这里是标签页</span>
    </div>
    <div class="main-content">
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
.main-container {
  position: relative;

  .tab-page-container {
    padding: 0 5px;
    height: 0.375rem;
    text-align: left;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    line-height: 0.375rem;
  }

  .main-content {
    overflow: auto;
    max-height: 10.25rem;
    border-radius: 5px;
  }
}
</style>
