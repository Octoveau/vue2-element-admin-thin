import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/index.less";
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icons";

Vue.use(ElementUI);
//引入rem的适配文件，以1920作为参照，1rem就是80px
import "./flexible/";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
