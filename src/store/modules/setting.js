export default {
  namespaced: true,
  state: {
    isShowFooter: false,
  },

  getters: {},

  mutations: {
    handleExplicitFooter(state, status) {
      state.isShowFooter = status;
    },
  },

  actions: {},
};
