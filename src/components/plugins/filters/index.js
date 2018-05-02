import date from './date.filter';
import types from './type.filter';

const install = function (Vue, opts = {}) {
  if (install.installed) return;

  Vue.filter('date', date);
  Vue.filter('types', types);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  date,
  types
};
