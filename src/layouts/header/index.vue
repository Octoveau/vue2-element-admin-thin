<template>
  <div class="ov-layout-header">
    <div class="ov-layout-header-body ov-layout-header-left">
      <div class="ov-layout-header-left__title">
        <span>vue2-admin-template</span>
      </div>
      <div class="ov-layout-header-left__icon">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleChangeCollapse"></i>
      </div>
      <bread-crumb :breadcrumb-style="{ 'margin-left': '15px' }" />
    </div>
    <div class="ov-layout-header-body ov-layout-header-action">
      <!-- i18n -->
      <i18n-comp class="ov-layout-header-action__item i18n-item" />
      <el-divider direction="vertical"></el-divider>
      <div class="ov-layout-header-action__item ov-layout-header-action__user-dropdown">
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
.ov-layout-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  &-body {
    display: flex;
    align-items: center;
  }

  &-left {
    &__title {
      width: 200px;
      text-align: center;
      color: #0960bd;
      font-weight: 700;
    }

    &__icon {
      padding-left: 5px;

      i {
        font-size: 0.225rem;
        color: #000;
        line-height: 0.6rem;
        cursor: pointer;
      }
    }
  }

  &-action {
    /deep/.el-divider {
      align-self: center;
    }

    &__item {
      padding: 0 8px;
      cursor: pointer;

      &:hover {
        background-color: #f6f6f6;
      }
    }

    &__user-dropdown {
      display: flex;
      justify-content: right;
      align-items: center;
    }
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;

    .user-icon {
      margin-right: 12px;
    }
  }
}
</style>
