import { getRequest, postRequest } from '../library/fetchRequests';

export default {
  async FETCH_DATA({ state, commit }, { type }) {
    commit('SET_LOADER', true);
    const url = `${process.env.VUE_APP_POST_BASE_URL}/posts`;
    let r;
    switch (type) {
      case 'POST_DATA':
        r = await getRequest(url);
        if (r) {
          commit('SET_POSTS', r.data);
        }
        break;
      case 'APPEND_POST_DATA':
        if (state.currentPage === state.lastPage) {
          break;
        }
        r = await getRequest(state.nextPageUrl);
        if (r) {
          commit('SET_POSTS', r.data);
        }
        break;
      default:
    }
    commit('SET_LOADER', false);
  },
  async SIGN_IN({ commit }, credential) {
    commit('SET_LOGIN_LOADING', true);
    const url = 'http://mini-twitter.test/api/auth/login';
    const r = await postRequest(url, { ...credential });
    if ('token' in r.data) {
      commit('SET_LOGIN_DATA', r.data);
    } else {
      commit('SET_LOGIN_ERROR', r.data.error.messages[0]);
    }
    commit('SET_LOGIN_LOADING', false);
  },
  async LOGOUT({ commit }) {
    await localStorage.clear();
    commit('SET_AUTH_STATUS', false);
  },
  async SIGN_UP({ commit }, formData) {
    commit('SET_SIGNUP_LOADING', true);
    const url = 'http://mini-twitter.test/api/users';
    const r = await postRequest(url, { ...formData });
    console.log('sign up r', r);
    if ('status' in r.data) {
      /* eslint-disable */
      location.href = '/';
      /* eslint-disable */
    } else {
      commit('SET_SIGNUP_ERROR', r.data.error.messages);
    }
    commit('SET_SIGNUP_LOADING', false);
  },
  async SUBMIT_POST({ commit }, content) {
    commit('SET_POST_LOADING', true);
    const token = await localStorage.getItem('token');
    const url = `http://mini-twitter.test/api/posts?token=${token}`;
    const r = await postRequest(url, content);
    console.log('sign up r', r);
    if ('status' in r.data) {
      commit('SET_SNACK_BAR', { type: 'success', text: r.data.message, status: true });
      commit('SET_POST_DIALOG', false);
    } else {
      commit('SET_SNACK_BAR', { type: 'error', text: r.data.error.messages[0][0], status: true });
    }
    commit('SET_POST_LOADING', false);
  },
  async SHOW_COMMENTS({ commit }, data) {
    console.log('comment data', data);
    commit('SET_COMMENTS', data.comments);
    commit('SET_POST_ID', data.id);
    commit('SET_COMMENT_DIALOG', true);
  },
  async POST_COMMENT({ state, commit }, content) {
    commit('SET_COMMENT_LOADING', true);
    const token = await localStorage.getItem('token');
    const url = `http://mini-twitter.test/api/posts/${state.postId}/comments?token=${token}`;
    const r = await postRequest(url, content);
    console.log('Post r', r);
    if ('status' in r.data) {
      commit('SET_SNACK_BAR', { type: 'success', text: r.data.message, status: true });
    } else {
      commit('SET_SNACK_BAR', { type: 'error', text: r.data.error.messages[0][0], status: true });
    }
    commit('SET_COMMENT_LOADING', false);
  },
};
