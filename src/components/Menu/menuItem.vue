<template>
  <div style="display: inline">
    <template v-for="(item, index) in menuList">
      <el-submenu v-if="item.children && item.children.length" :key="index" :index="item.menu_name">
        <template slot="title">
          <i :class="item.menu_icon ? item.menu_icon : 'no-icon'" />
          <span slot="title">{{ item.menu_name }}</span>
        </template>
        <!-- 递归 样式添加 更改 -->
        <Menu :menu-list="item.children" />
      </el-submenu>
      <el-menu-item v-else :key="index" :index="item.menu_url ? item.menu_url : ''">
        <i :class="item.menu_icon ? item.menu_icon : 'no-icon'" />
        <span slot="title">{{ item.menu_name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['menuList'],
};
</script>
