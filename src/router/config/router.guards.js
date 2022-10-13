import NProgress from "nprogress";
import "nprogress/nprogress.css";
class RouterGuards {
  constructor(router) {
    this.router = router;
  }

  // 初始化调用全部方法
  initRouterGuards() {
    this.beforeEach();
    this.onError();
    this.afterEach();
  }

  beforeEach() {
    return this.router.beforeEach((to, from, next) => {
      NProgress.start();
      if (to.path === "/") {
        next({
          path: "/login",
        });
      } else {
        next();
      }
    });
  }

  onError() {
    return this.router.onError(() => {
      NProgress.done();
    });
  }

  afterEach() {
    return this.router.afterEach(() => {
      NProgress.done();
    });
  }
}

export default RouterGuards;
