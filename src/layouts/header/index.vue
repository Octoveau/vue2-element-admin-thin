<template>
  <div class="header-container">
    <el-row>
      <el-col :span="6">
        <div class="logo-title">
          <span>vue2-admin-template开源模板</span>
        </div>
      </el-col>
      <el-col :span="12" />
      <el-col :span="6">
        <div class="header-logout">
          <img src="../../assets/images/avator.png" alt="" width="40" />
          <div class="dropdown-container">
            <el-dropdown>
              <span class="el-dropdown-link">
                <span>{{ userName }}</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item key="0">
                  <span @click="handleJumpToPersonal">个人中心</span>
                </el-dropdown-item>
                <el-dropdown-item key="1">
                  <span @click="handleLogout">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "superAdmin",
    };
  },

  computed: {},

  mounted() {},

  methods: {
    handleJumpToPersonal() {},

    handleLogout() {},
  },
};
</script>
<style lang="less" scoped>
.header-container {
  width: 100%;
  .logo-title {
    text-align: left;
    color: #000000;
    font-weight: bold;
    font-size: 0.27rem;
  }

  .header-logout {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }

  .el-col {
    border: 1px solid transparent;
  }
}

.el-dropdown-menu {
  top: 40px !important;
}
</style>
