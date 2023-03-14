import storage from '@/utils/storage';

const settingJSON = JSON.parse(storage.getStorage('setting'));

function setSettingState(key, status = true) {
  return Object.prototype.hasOwnProperty.call(settingJSON, key) ? settingJSON[key] : status;
}

function setSettingMutations(obj) {
  const params = Object.assign(settingJSON || {}, obj);
  storage.setStorage('setting', JSON.stringify(params));
}

export default {
  namespaced: true,
  state: {
    isShowFooter: setSettingState('isShowFooter'),
    isShowBreadCrumb: setSettingState('isShowBreadCrumb'),
  },

  getters: {},

  mutations: {
    handleExplicitFooter(state, status) {
      setSettingMutations({ isShowFooter: status });
      state.isShowFooter = status;
    },

    handleExplicitBreadCrumb(state, status) {
      setSettingMutations({ isShowBreadCrumb: status });
      state.isShowBreadCrumb = status;
    },
  },

  actions: {},
};
