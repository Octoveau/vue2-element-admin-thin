import Vue from 'vue';
import Vuex from 'vuex';
import common from './modules/common';
import setting from './modules/setting';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    setting,
  },
});
