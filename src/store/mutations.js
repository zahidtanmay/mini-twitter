import Vue from 'vue';

export default {
  SET_POSTS: (state, value) => {
    Vue.set(state, 'posts', value);
  },
};
