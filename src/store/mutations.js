import Vue from 'vue';

export default {
  SET_POSTS: (state, value) => {
    /* eslint-disable */
    let currentValue = state.posts || [];
    value.data.forEach(item => currentValue.push(item));
    /* eslint-disable */
    Vue.set(state, 'posts', currentValue);
    Vue.set(state, 'currentPage', value.current_page);
    Vue.set(state, 'lastPage', value.last_page);
    Vue.set(state, 'nextPageUrl', value.next_page_url);
  },
  SET_LOADER: (state, value) => {
    Vue.set(state, 'loader', value);
  },
};
