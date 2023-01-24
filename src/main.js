import ElementUI from 'element-ui';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './css/index.less';
import './assets/icons';
import 'element-ui/lib/theme-chalk/index.css';
import './flexible';

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  beforeCreate() {},
  render: (h) => h(App),
}).$mount('#app');
