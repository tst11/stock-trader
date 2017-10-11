import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import { store } from './store/store'
import { routes } from './routes'

Vue.filter('currency', function(value) {
  return value.toLocaleString();
});

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
