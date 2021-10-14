// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import ElementUI from 'element-ui'; // element-ui 组件
import routes from './router';
import 'assets/fonts/icons/iconfont.scss'; // 使用阿里图标
import api from './api'; // api
import Filter from 'components/plugins/filters';
import 'assets/scss/element-variables.scss'; // element-ui 组件样式

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI); // 使用ElementUI组件
Vue.use(api);
Vue.use(Filter); // 使用自定义过滤器
const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
