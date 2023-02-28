const adminRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layouts'),
    redirect: '/ayalysis',
    children: [
      {
        path: '/ayalysis',
        name: 'Ayalysis',
        component: () => import('@/views/DashBoard/ayalysis'),
        meta: {
          title: 'Ayalysis',
        },
      },
      {
        path: '/workplace',
        name: 'WorkPlace',
        component: () => import('@/views/DashBoard/workPlace'),
        meta: {
          title: 'WorkPlace',
        },
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
];

export default adminRoutes;
