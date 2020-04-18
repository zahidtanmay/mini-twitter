import Vue from 'vue';

export default {
  SET_POSTS: (state, value) => {
    Vue.set(state, 'posts', value);
  },
  SET_LOADER: (state, value) => {
    Vue.set(state, 'loader', value);
  },
};
