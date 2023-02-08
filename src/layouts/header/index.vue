<template>
  <div class="header-container">
    <div class="header-title-left">
      <div class="header-title">
        <span>vue2-admin-template</span>
      </div>
      <div class="collapse-icon">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleChangeCollapse"></i>
      </div>
    </div>
    <div class="header-title-right">
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
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      userName: 'Admin',
    };
  },

  computed: {
    ...mapState('common', ['isCollapse']),
  },

  mounted() {},

  methods: {
    ...mapMutations('common', ['changeCollapseStatus']),

    handleJumpToPersonal() {},

    handleLogout() {
      this.$router.push({
        name: 'Logout',
      });
    },

    /*
     * @description 点击切换菜单Collapse
     * @author zero_fsc
     * @date 2023/02/08 00:38:54
     */
    handleChangeCollapse() {
      this.changeCollapseStatus(!this.isCollapse);
    },
  },
};
</script>
<style lang="less" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .header-title-left {
    display: flex;

    .header-title {
      width: 200px;
      text-align: center;
      color: #fff;
      font-weight: bold;
    }

    .collapse-icon {
      i {
        font-size: 0.225rem;
        color: #fff;
        line-height: 0.6rem;
        cursor: pointer;
      }
    }
  }

  .header-logout {
    display: flex;
    justify-content: right;
    align-items: center;
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
