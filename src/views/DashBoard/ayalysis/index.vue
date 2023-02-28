<template>
  <section class="main-section">
    <dashHeaderComp></dashHeaderComp>
    <dashContentComp></dashContentComp>
    <dashFooterComp></dashFooterComp>
  </section>
</template>

<script>
import dashHeaderComp from './comps/dashHeader';
import dashContentComp from './comps/dashContent';
import dashFooterComp from './comps/dashFooter';

export default {
  components: {
    dashHeaderComp,
    dashContentComp,
    dashFooterComp,
  },
};
</script>
<style lang="less" scoped>
.main-section {
  padding: 0.1rem 0;
}
</style>
