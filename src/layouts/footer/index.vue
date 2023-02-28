<template>
  <div class="footer-container">
    <slot name="content">
      <div class="footer-content-description">备案号：蜀ICP备2022027428号-1</div>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.footer-container {
  margin: 0.6rem 0 0.3rem;
  text-align: center;

  .footer-content-link {
    margin-bottom: 0.125rem;
  }

  .footer-content-description {
    font-size: 0.175rem;
    color: rgba(0, 0, 0, 45%);
  }
}
</style>
