<template>
  <div class="table-wrapper">
    <el-table ref="table" :data="tableData" class="swiper-page-table" height="220px">
      <el-table-column prop="name" label="接入用户" width="120"></el-table-column>
      <el-table-column prop="accessTime" label="接入时间" width="200"></el-table-column>
      <el-table-column prop="sectionTime" label="在线时间" width="120"></el-table-column>
      <el-table-column prop="callbackUrl" label="回调地址" width="150"></el-table-column>
      <el-table-column prop="isLoginSuccess" label="接入状况" width="120">
        <template slot-scope="scope">
          <el-tag size="small" :type="scope.row.isLoginSuccess === '成功' ? 'success' : 'danger'">{{ scope.row.isLoginSuccess }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      name: ['李小二', '奥巴既', '蔡徐鸡', '处于', '毅然', '张旭日', '刘大平', '刘礼逊', '长相非', '张丽萍', '蔡徐吖', '宫本误', '刘备'],
      tableData: [],
    };
  },
  mounted() {
    this.name.forEach((key) => {
      this.tableData.push({
        name: key,
        accessTime: this.getAccessTime(),
        sectionTime: this.getSectionTime(),
        callbackUrl: this.getCallbackUrl(),
        isLoginSuccess: this.getIsLoginSuccess(),
      });
    });
    this.tableScroll();
  },

  methods: {
    getCallbackUrl() {
      let str = '';
      const n = 4;
      for (let i = 0; i < n; i++) {
        str += Math.floor(Math.random() * 10);
      }
      return `http://*****/${str}`;
    },
    getIsLoginSuccess() {
      return Math.floor(Math.random() * (10 - 1) + 1) % 2 ? '成功' : '失败';
    },
    getAccessTime() {
      return moment(new Date().getTime() - Math.floor(Math.random() * (1000 * 60 * 60 * 12 - 10000)) + 10000).format('YYYY-MM-DD hh:mm:ss');
    },
    getSectionTime() {
      return `${Math.floor(Math.random() * (300 - 1) + 1)}分钟`;
    },
    tableScroll() {
      const { table } = this.$refs;
      // 拿到表格中承载数据的div元素
      const divData = table.bodyWrapper;
      // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
      setInterval(() => {
        // 元素自增距离顶部1像素
        divData.scrollTop += 1;
        // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
        if (divData.clientHeight + divData.scrollTop === divData.scrollHeight) {
          // 重置table距离顶部距离
          divData.scrollTop = 0;
        }
      }, 30); // 滚动速度
    },
  },
};
</script>

<style lang="less" scoped>
// 去除滚动的滚动条
::v-deep .el-table--scrollable-y .el-table__body-wrapper {
  overflow: hidden;
}
//hover时样式
.table-wrapper ::v-deep .el-table tbody tr:hover > td {
  background-color: #909399 !important;
}
</style>
