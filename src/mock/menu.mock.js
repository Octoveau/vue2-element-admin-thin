export const menuList = [
  {
    menu_name: 'dashboard',
    menu_url: '',
    menu_icon: 'el-icon-s-home',
    children: [
      {
        menu_name: 'ayalysis',
        menu_url: '/ayalysis',
      },
      {
        menu_name: 'workplace',
        menu_url: '/workplace',
      },
    ],
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
