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
};
