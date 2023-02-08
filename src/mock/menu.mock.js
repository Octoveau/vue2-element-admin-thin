export const menuList = [
  {
    menu_name: 'dashboard',
    menu_url: '/dashboard',
    menu_icon: 'el-icon-s-home',
  },
  {
    menu_name: 'nestmenu',
    menu_icon: 'el-icon-connection',
    children: [
      {
        menu_name: 'menu1',
        menu_url: '',
        children: [
          {
            menu_name: 'menu1-1',
            menu_url: '',
            children: [
              {
                menu_name: 'menu1-1-1',
                menu_url: '',
              },
            ],
          },
          {
            menu_name: 'menu1-2',
            menu_url: '',
          },
        ],
      },
      {
        menu_name: 'menu2',
        menu_url: '',
      },
    ],
  },
  {
    menu_name: 'map',
    menu_url: '',
    menu_icon: 'el-icon-position',
    children: [
      {
        menu_name: 'baidumap',
        menu_url: '/home',
      },
    ],
  },
];
