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
    path: '/sso-login',
    name: 'SsoLogin',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/ssoLogin'),
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
