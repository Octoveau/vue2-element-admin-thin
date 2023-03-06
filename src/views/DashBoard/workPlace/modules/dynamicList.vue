<template>
  <div class="ov-workplace-dynamic">
    <el-card shadow="never" :body-style="{ padding: '0px 20px 10px 20px' }">
      <div slot="header" class="clearfix">
        <span style="font-size: 0.2rem">最新动态</span>
      </div>

      <div class="ov-workplace-dynamic-main">
        <div class="ov-workplace-dynamic-main__list">
          <div v-for="(item, index) in 6" :key="index" class="ov-workplace-dynamic-main__item">
            <div class="ov-workplace-dynamic-main__item-avator">
              <el-avatar size="large" :src="avatar"></el-avatar>
            </div>
            <div class="ov-workplace-dynamic-main__item-desc">
              <span>这里是最新动态</span>
              <span>2023-03-01</span>
            </div>
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
.ov-workplace-dynamic {
  &-main {
    &__list {
      padding-top: 12px;
    }

    &__item {
      display: flex;

      &:not(:first-child) {
        padding-top: 0.15rem;
      }

      &:not(:last-child) {
        padding-bottom: 0.15rem;
        border-bottom: 1px solid #e8e8e8;
      }

      &-desc {
        margin-left: 10px;

        span {
          display: block;
        }
      }
    }
  }
}
</style>
