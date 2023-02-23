<template>
  <div class="header-container">
    <div class="header-title-left">
      <div class="header-title">
        <span>vue2-admin-template</span>
      </div>
      <div class="collapse-icon">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleChangeCollapse"></i>
      </div>
      <div class="bread-crumb-content">
        <bread-crumb />
      </div>
    </div>
    <div class="header-title-right">
      <!-- i18n -->
      <i18n-comp class="header-title-right__item" />
      <el-divider direction="vertical"></el-divider>
      <div class="header-logout header-title-right__item">
        <el-dropdown>
          <span class="el-dropdown-link">
            <svg-icon icon-class="user" class="user-icon" />
            <span>{{ userName }}</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item key="0">
              <span @click="handleJumpToPersonal">{{ $t('navbar.profile') }}</span>
            </el-dropdown-item>
            <el-dropdown-item key="1">
              <span @click="handleLogout">{{ $t('navbar.logOut') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@components/BreadCrumb';
import { mapState, mapMutations } from 'vuex';
import I18nComp from '@components/I18n';

export default {
  components: { I18nComp, BreadCrumb },
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
    align-items: center;

    .header-title {
      width: 200px;
      text-align: center;
      color: #0960bd;
      font-weight: 700;
    }

    .collapse-icon {
      padding-left: 5px;

      i {
        font-size: 0.225rem;
        color: #000;
        line-height: 0.6rem;
        cursor: pointer;
      }
    }

    .bread-crumb-content {
      margin-left: 15px;
    }
  }

  .header-title-right {
    display: flex;

    /deep/.el-divider {
      align-self: center;
    }

    .header-title-right__item {
      padding: 0 8px;
      cursor: pointer;

      &:hover {
        background-color: #f6f6f6;
      }
    }
  }

  .header-logout {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;

    .user-icon {
      margin-right: 12px;
    }
  }

  .el-col {
    border: 1px solid transparent;
  }
}

.el-dropdown-menu {
  top: 0.5rem !important;
}
</style>
