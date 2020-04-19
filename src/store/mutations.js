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
  SET_AUTH_STATUS: (state, value) => {
    Vue.set(state, 'authStatus', value);
  },
  SET_LOGIN_DATA: (state, value) => {
    localStorage.setItem('token', value.token);
    localStorage.setItem('user', JSON.stringify(value.user));
    Vue.set(state, 'user', value.user);
    Vue.set(state, 'authStatus', true);
    location.href = '/';
  },
  SET_LOGIN_ERROR: (state, value) => {
    Vue.set(state, 'loginError', value);
  },
  SET_LOGIN_LOADING: (state, value) => {
    Vue.set(state, 'loginLoading', value);
  },
  SET_USER_INFO: (state) => {
    const user = JSON.parse(localStorage.getItem('user'));
    Vue.set(state, 'user', user);
  },
  SET_SIGNUP_ERROR: (state, value) => {
    Vue.set(state, 'signupError', value);
  },
  SET_SIGNUP_LOADING: (state, value) => {
    Vue.set(state, 'signupLoading', value);
  },
};
