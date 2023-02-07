import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false,
  },
  mutations: {
    changeCollapseStatus(state, status) {
      state.isCollapse = status;
    },
  },
  actions: {},
  modules: {},
});
