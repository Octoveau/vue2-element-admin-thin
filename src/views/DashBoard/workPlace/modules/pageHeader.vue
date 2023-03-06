<template>
  <PageHeader>
    <template slot="content">
      <div class="ov-workplace-pageheader">
        <div class="ov-workplace-pageheader-body ov-workplace-pageheader-left">
          <div class="ov-workplace-pageheader-left__avatar">
            <el-avatar size="large" :src="avatar"></el-avatar>
          </div>
          <div class="ov-workplace-pageheader-left__content">
            <p>早安，{{ userName }}</p>
            <p>今日晴，20℃ - 32℃！</p>
          </div>
        </div>
        <div class="ov-workplace-pageheader-body ov-workplace-pageheader-right">
          <div class="ov-workplace-pageheader-right__list">
            <div v-for="(item, index) in taskList" :key="index" class="ov-workplace-pageheader-right__item">
              <div class="ov-workplace-pageheader-right__item-title">{{ item.label }}</div>
              <div class="ov-workplace-pageheader-right__item-number">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageHeader>
</template>

<script>
import PageHeader from '@components/PageHeader';

export default {
  components: { PageHeader },
  props: {
    avatar: {
      type: String,
      default: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    },
    userName: {
      type: String,
      default: '',
    },
    taskList: {
      type: Array,
      default: () => [],
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
.ov-workplace-pageheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.3rem;
  background-color: #fff;

  &-left {
    display: flex;
    align-items: center;

    &__avatar {
      margin-right: 10px;
    }

    &__content {
      p {
        &:first-child {
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: bold;
        }

        &:last-child {
          color: #8d8d8d;
        }
      }
    }
  }

  &-right {
    padding-right: 0.375rem;

    &__list {
      display: flex;
    }

    &__item {
      display: flex;
      flex-direction: column;
      text-align: right;

      &:not(:last-child) {
        padding-right: 40px;
      }

      &-title {
        font-size: 0.175rem;
      }

      &-number {
        font-size: 0.275rem;
      }
    }
  }
}
</style>
