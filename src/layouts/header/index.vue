<template>
  <div class="header-container">
    <el-row style="height: 100%">
      <el-col :span="6">
        <div class="logo-title">
          <span>vue2-admin-template开源模板</span>
        </div>
      </el-col>
      <el-col :span="12" />
      <el-col :span="6">
        <div class="header-logout">
          <svg-icon icon-class="user" style="color: #fff" />
          <div>
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
      userName: "Admin",
    };
  },

  computed: {},

  mounted() {},

  methods: {
    handleJumpToPersonal() {},

    handleLogout() {
      this.$router.push({
        name: "Logout",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 100%;
  .logo-title {
    text-align: left;
    color: #fff;
    font-weight: bold;
    font-size: 0.27rem;
  }

  .header-logout {
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .el-dropdown-link {
    margin-left: 0.2rem;
    cursor: pointer;
    color: #fff;
  }

  .el-col {
    border: 1px solid transparent;
  }
}

.el-dropdown-menu {
  top: 0.5rem !important;
}
</style>
