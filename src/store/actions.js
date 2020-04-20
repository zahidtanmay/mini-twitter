import { getRequest, postRequest, deleteRequest } from '../library/fetchRequests';
/* eslint-disable */
import router from '../router';
/* eslint-disable */
const baseURL = process.env.VUE_APP_POST_BASE_URL;

export default {
  async FETCH_DATA({ state, commit }, { type }) {
    commit('SET_LOADER', true);
    let url = '';
    let r;
    switch (type) {
      case 'POST_DATA':
        url = `${baseURL}/posts`;
        r = await getRequest(url);
        if (r) {
          commit('SET_POSTS', r.data);
        }
        break;
      case 'APPEND_POST_DATA':
        if (state.currentPage !== state.lastPage) {
          r = await getRequest(state.nextPageUrl);
          if (r) {
            commit('SET_POSTS', r.data);
          }
        }
        break;
      case 'USER_DATA':
        url = `${baseURL}/users/${state.profileId}`;
        r = await getRequest(url);
        if (r.data) {
          commit('SET_USER_POSTS', r.data || []);
          commit('SET_FOLLOWERS', r.data.followers || []);
          commit('SET_FOLLOWING', r.data.following || []);
        }
        break;
      case 'TRENDING_DATA':
        const token = await localStorage.getItem('token');
        url = `${baseURL}/posts/trending?token=${token}`;
        r = await getRequest(url);
        if (r) {
          commit('SET_TRENDING_DATA', r.data);
        }
        break;
      case 'APPEND_TRENDING_DATA':
        console.log('append trendig data');
        break;
      default:
    }
    commit('SET_LOADER', false);
  },
  async SIGN_IN({ commit }, credential) {
    commit('SET_LOGIN_LOADING', true);
    const url = `${baseURL}/auth/login`;
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
    const url = `${baseURL}/users`;
    const r = await postRequest(url, { ...formData });
    if ('status' in r.data) {
      /* eslint-disable */
      location.href = '/';
      /* eslint-disable */
    } else {
      commit('SET_SIGNUP_ERROR', r.data.error.messages);
    }
    commit('SET_SIGNUP_LOADING', false);
  },
  async SUBMIT_POST({ dispatch, commit }, content) {
    commit('SET_POST_LOADING', true);
    const token = await localStorage.getItem('token');
    const url = `${baseURL}/posts?token=${token}`;
    const r = await postRequest(url, content);
    if ('status' in r.data) {
      commit('SET_SNACK_BAR', { type: 'success', text: r.data.message, status: true });
      commit('SET_POST_DIALOG', false);
    } else {
      commit('SET_SNACK_BAR', { type: 'error', text: r.data.error.messages[0][0], status: true });
    }
    commit('RESET_POST_DATA');
    dispatch('FETCH_DATA', {type: 'POST_DATA'});
    commit('SET_POST_LOADING', false);
  },
  async SHOW_COMMENTS({ commit }, data) {
    commit('SET_COMMENTS', data.comments);
    commit('SET_POST_ID', data.id);
    commit('SET_COMMENT_DIALOG', true);
  },
  async POST_COMMENT({ dispatch, state, commit }, content) {
    commit('SET_COMMENT_LOADING', true);
    const token = await localStorage.getItem('token');
    const url = `${baseURL}/posts/${state.postId}/comments?token=${token}`;
    const r = await postRequest(url, content);
    if ('status' in r.data) {
      commit('SET_SNACK_BAR', { type: 'success', text: r.data.message, status: true });
    } else {
      commit('SET_SNACK_BAR', { type: 'error', text: r.data.error.messages[0][0], status: true });
    }
    commit('RESET_POST_DATA');
    dispatch('FETCH_DATA', {type: 'POST_DATA'});
    commit('SET_COMMENT_LOADING', false);
  },
  async VISIT_PROFILE({ commit }, data) {
    commit('SET_PROFILE_ID', data.id);
    router.push({ name: 'profile', params: { name: data.id }})
  },
  async SHOW_USER_LIST({ state, commit }, data) {
    await commit('SET_LIST_DIALOG', true);

    if (data.type === 'followers') {
      await commit('SET_USERS_LIST', state.followers);
      await commit('SET_USER_LIST_HEADER', 'Followers');
    }

    if (data.type === 'following') {
      await commit('SET_USERS_LIST', state.following);
      await commit('SET_USER_LIST_HEADER', 'Following');
    }

  },
  async FOLLOW_USER({ dispatch, state, commit }) {
    const token = await localStorage.getItem('token');
    const url = `${baseURL}/users/${state.user.id}/${state.profileUser.id}?token=${token}`;
    const r = await postRequest(url, {});
    if ('status' in r.data) {
      commit('SET_SNACK_BAR', { type: 'success', text: r.data.message, status: true });
    } else {
      commit('SET_SNACK_BAR', { type: 'error', text: r.data.error.messages[0][0], status: true });
    }
    commit('RESET_USER_DATA');
    dispatch('FETCH_DATA', { type: 'USER_DATA' });
  },
  async UNFOLLOW_USER({ state, commit }) {
    let pivot = state.followers.filter((follower) => {
      return follower.id === state.user.id;
    });
    const token = await localStorage.getItem('token');
    const url = `${baseURL}/users/unfollow/${pivot[0].pivot.id}?token=${token}`;
    const r = await deleteRequest(url, {});
    if ('status' in r.data) {
      commit('SET_SNACK_BAR', { type: 'success', text: r.data.message, status: true });
    } else {
      commit('SET_SNACK_BAR', { type: 'error', text: r.data.error.messages[0][0], status: true });
    }
    commit('RESET_USER_DATA');
    dispatch('FETCH_DATA', { type: 'USER_DATA' });
  },
};
