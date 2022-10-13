import Vue from "vue";
import VueRouter from "vue-router";
import RouterGuards from "./config/router.guards";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/layouts/index.vue"),
    redirect: "DashBoard",
    children: [
      {
        path: "/dashboard",
        name: "DashBoard",
        component: () => import("@/views/DashBoard/index.vue"),
        meta: {
          title: "DashBoard",
        },
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import("@/views/Home"),
        meta: {
          title: '首页'
        }
      }
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// 路由守卫
new RouterGuards(router).initRouterGuards();

export default router;
