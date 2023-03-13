<template>
  <div class="ov-layout-footer">
    <slot name="content">
      <div class="ov-layout-footer__description">备案号：蜀ICP备2022027428号-1</div>
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
.ov-layout-footer {
  text-align: center;

  &__description {
    font-size: 0.175rem;
    color: rgba(0, 0, 0, 45%);
  }
}
</style>
