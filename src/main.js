import ElementUI from 'element-ui';
import authStorage from '@/utils/auth';
import Vue from 'vue';
import i18n from '@/lang';
import App from './App';
import router from './router';
import store from './store';
import './config';

// 初始化使用普通登录
authStorage.setIsSsoLoginInfo(false);
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
