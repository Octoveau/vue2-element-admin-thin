export const menuList = [
  {
    menu_name: '首页',
    menu_url: '/dashboard',
    menu_icon: 'el-icon-s-home',
  },
  {
    menu_name: '嵌套菜单',
    menu_icon: 'el-icon-connection',
    children: [
      {
        menu_name: '菜单1',
        menu_url: '',
        children: [
          {
            menu_name: '菜单1-1',
            menu_url: '',
            children: [
              {
                menu_name: '菜单1-1-1',
                menu_url: '',
              },
            ],
          },
          {
            menu_name: '菜单1-2',
            menu_url: '',
          },
        ],
      },
      {
        menu_name: '菜单2',
        menu_url: '',
      },
    ],
  },
  {
    menu_name: '地图模块',
    menu_url: '',
    menu_icon: 'iconfont yl-menu-icon icon-ditu',
    children: [
      {
        menu_name: '百度地图',
        menu_url: '/home',
      },
    ],
  },
];
