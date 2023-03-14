<template>
  <div class="setting-container">
    <i role="img" class="el-icon-setting" @click="handleExplicitDrawer"></i>
    <el-drawer title="全局配置" :visible.sync="drawer" :modal-append-to-body="false" class="setting-body" size="4.125rem">
      <layoutSetting />
    </el-drawer>
  </div>
</template>

<script>
import layoutSetting from './modules/layout';

export default {
  components: { layoutSetting },
  data() {
    return {
      drawer: false,
    };
  },

  computed: {},

  mounted() {},

  methods: {
    handleExplicitDrawer() {
      this.drawer = true;
    },
  },
};
</script>
