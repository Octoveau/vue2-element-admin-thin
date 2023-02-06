const loginRoutes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/login'),
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: {
      title: '退出登录',
    },
    component: () => import('@/views/login/logout'),
  },
];

export default loginRoutes;
