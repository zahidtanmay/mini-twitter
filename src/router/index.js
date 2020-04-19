import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/profile/{name}',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next({ name: 'home' });
      }
      next();
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next({ name: 'home' });
      }
      next();
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
