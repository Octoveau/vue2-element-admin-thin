<template>
  <div>
    <template v-for="(item, index) in menuList">
      <el-submenu v-if="item.children && item.children.length > 0" :key="index" :index="item.menu_name"  >
        <template slot="title">
          <i :class="item.menu_icon ? item.menu_icon : 'no-icon'" />
          <span slot="title">{{ item.menu_name }}</span>
        </template>
        <!-- 递归 样式添加 更改 -->
        <Menu
          :menuList="item.children"
          class="child-submenu"
        />
      </el-submenu>
      <el-menu-item v-else :index="item.menu_url ? item.menu_url : ''"  :key="index">
        <i :class="item.menu_icon ? item.menu_icon : 'no-icon'" />
        <span slot="title">{{ item.menu_name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['menuList']
}
</script>
