/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhLocal from './zh';
import enLocal from './en';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh',
  messages: {
    zh: zhLocal,
    en: enLocal,
  },
});

export default i18n;
