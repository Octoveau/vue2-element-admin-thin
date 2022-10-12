import Vue from "vue";
import VueRouter from "vue-router";
import RouterGuards from "./config/router.guards";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

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
          name: "DashBoard",
        },
      },
    ],
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
