export default {
  namespaced: true,
  state: {
    isCollapse: false,
  },

  getters: {},

  mutations: {
    changeCollapseStatus(state, status) {
      state.isCollapse = status;
    },
  },

  actions: {},
};
