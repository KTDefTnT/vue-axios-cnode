import api from './modules';
import Vue from 'vue';
// import './api.config';

// require('./mock_data');

Vue.api = {};

const install = (Vue) => {
  if (install.installed) {
    return;
  }
  Vue.api['mock'] = api; // 配置核心模块的api
  // console.log(Vue.api);
  Object.defineProperties(Vue.prototype, {
    $api: {
      get () {
        return Vue.api;
      }
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default {
  install
};
