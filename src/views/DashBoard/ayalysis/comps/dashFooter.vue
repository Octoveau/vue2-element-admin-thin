<template>
  <section class="section">
    <el-card>
      <div slot="header">
        <span class="block"></span>
        <strong>sso近7天接入状况</strong>
      </div>
      <div>
        <footerLineComp></footerLineComp>
      </div>
    </el-card>

    <el-card>
      <div slot="header">
        <span class="block"></span>
        <strong>近7天接入的地区排名及成功率</strong>
      </div>
      <div>
        <footerPieComp></footerPieComp>
        <footerPieAniComp></footerPieAniComp>
      </div>
    </el-card>
  </section>
</template>

<script>
import footerLineComp from './footerLine';
import footerPieComp from './footerPie';
import footerPieAniComp from './footerPieAni';

export default {
  components: {
    footerLineComp,
    footerPieComp,
    footerPieAniComp,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.section {
  display: flex;
  flex-wrap: wrap;

  ::v-deep .el-card {
    margin: 0.1rem;
  }

  ::v-deep .el-card__header {
    padding: 0.1rem 0;
    color: #409eff;

    .block {
      display: inline-block;
      margin-right: 0.1rem;
      width: 8px;
      height: 16px;
      background-image: linear-gradient(to bottom, #127ce7, #3384d6);
    }

    strong {
      vertical-align: top;
    }
  }

  ::v-deep .el-card__body {
    padding: 0.1rem;
  }
}
</style>
