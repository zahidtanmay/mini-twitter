import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './library/filters';

Vue.config.productionTip = false;
/* eslint-disable */
router.beforeEach(async function (to, from, next) {
  console.log('ROUTER', to, from);
  const token = await localStorage.getItem('token');
  if (token) {
    console.log('ROUTER TOKEN', token);
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    if (JSON.parse(window.atob(base64)).exp > (Date.now() / 1000)) {
      store.commit('SET_AUTH_STATUS', true);
      next();
    }
    console.log('ROUTER TOKEN EXPIRED', token);
    store.commit('SET_AUTH_STATUS', false);
    localStorage.clear();
    next();
  }
  store.commit('SET_AUTH_STATUS', false);
  next();
});
/* eslint-disable */

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
