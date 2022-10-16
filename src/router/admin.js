const adminRoutes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layouts"),
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "DashBoard",
        component: () => import("@/views/DashBoard"),
        meta: {
          title: "DashBoard",
        },
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
];

export default adminRoutes;
