<template>
  <div class="ov-workplace">
    <!-- pageHeader -->
    <page-header :user-name="userName" :task-list="taskList" />
    <div class="public-content__padding ov-workplace-main">
      <div class="ov-workplace-main-body ov-workplace-main-major">
        <!-- Project List -->
        <project-list />
        <!-- Dynamic List -->
        <dynamic-list />
      </div>
      <div class="ov-workplace-main-body ov-workplace-main-secondary"></div>
    </div>
  </div>
</template>

<script>
import pageHeader from './modules/pageHeader';
import projectList from './modules/projectList';
import dynamicList from './modules/dynamicList';

export default {
  components: { pageHeader, projectList, dynamicList },
  data() {
    return {
      userName: 'super Admin',
      taskList: [
        { value: '1/20', label: '待办事项' },
        { value: '6', label: '成员' },
        { value: '10', label: '项目' },
      ],
    };
  },

  computed: {},

  methods: {},
};
</script>

<style lang="less" scoped>
.ov-workplace {
  &-main {
    &-major {
      margin: 0 0.25rem 0.25rem 0;
      width: 13.75rem;
    }
  }
}
</style>
