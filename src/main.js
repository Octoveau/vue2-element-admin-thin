import ElementUI from 'element-ui';
import Vue from 'vue';
import i18n from '@/lang';
import App from './App';
import router from './router';
import store from './store';
import './config';

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
