<template>
  <div class="ov-workplace-project">
    <el-card shadow="never" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <span style="font-size: 0.2rem">项目</span>
        <el-button type="text" style="float: right; padding: 3px 0">查看更多</el-button>
      </div>

      <div class="ov-workplace-project-body">
        <div class="ov-workplace-project-body__list">
          <div v-for="(item, index) in 6" :key="index" class="ov-workplace-project-body__item">
            <el-card shadow="hover">
              <div class="ov-workplace-project-body__item-title">
                <el-avatar size="large" :src="avatar"></el-avatar>
                <span class="title-name">Hello world</span>
              </div>
              <div class="ov-workplace-project-body__item-desc">
                <span>这里是项目的description</span>
              </div>
              <div class="ov-workplace-project-body__item-footer">
                <span>前端</span>
                <span>2022-12-04</span>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    },
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
.ov-workplace-project {
  margin-bottom: 0.3rem;

  ::v-deep(.el-card) {
    overflow: inherit;
    border: none;
    border-radius: 0;
  }

  &-body {
    &__list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      .el-card {
        border-radius: 0;
        cursor: pointer;
        border-right: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;

        &:hover {
          position: relative;
          z-index: 1;
          box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 16%), 0 3px 6px 0 rgba(0, 0, 0, 12%), 0 5px 12px 4px rgba(0, 0, 0, 9%);
        }
      }
    }

    &__item {
      width: 33.33%;

      &:nth-child(3n) {
        .el-card {
          border-right: 0;
        }
      }

      &-title {
        display: flex;
        align-items: center;

        .title-name {
          margin-left: 0.125rem;
          font-size: 0.2rem;
          font-weight: bold;
        }
      }

      &-desc {
        margin-top: 0.125rem;
        color: #8d8d8d;
      }

      &-footer {
        display: flex;
        justify-content: space-between;
        margin-top: 0.375rem;
        color: #8d8d8d;

        span {
          display: block;
        }
      }
    }
  }
}
</style>
