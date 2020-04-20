import { getRequest, postRequest, deleteRequest } from '../library/fetchRequests';
/* eslint-disable */
import router from '../router';
/* eslint-disable */

export default {
  async FETCH_DATA({ state, commit }, { type }) {
    commit('SET_LOADER', true);
    let url = '';
    let r;
    switch (type) {
      case 'POST_DATA':
        url = `${process.env.VUE_APP_POST_BASE_URL}/posts`;
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
      case 'USER_DATA':
        url = `http://mini-twitter.test/api/users/${state.profileId}`;
        r = await getRequest(url);
        if (r.data) {
          commit('SET_USER_POSTS', r.data || []);
          commit('SET_FOLLOWERS', r.data.followers || []);
          commit('SET_FOLLOWING', r.data.following || []);
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
  async VISIT_PROFILE({ commit }, data) {
    console.log('VISIT_PROFILE', data);
    commit('SET_PROFILE_ID', data.id);
    router.push({ name: 'profile', params: { name: data.id }})
  },
  async SHOW_USER_LIST({ state, commit }, data) {
    console.log('show user list', data);
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
  async FOLLOW_USER({ state, commit }) {
    console.log('following id', state.user, state.profileUser);
    const token = await localStorage.getItem('token');
    const url = `http://mini-twitter.test/api/users/${state.user.id}/${state.profileUser.id}?token=${token}`;
    const r = await postRequest(url, {});
    console.log('Post r', r);
    if ('status' in r.data) {
      commit('SET_SNACK_BAR', { type: 'success', text: r.data.message, status: true });
    } else {
      commit('SET_SNACK_BAR', { type: 'error', text: r.data.error.messages[0][0], status: true });
    }
  },
  async UNFOLLOW_USER({ state, commit }) {
    let pivot = state.followers.filter((follower) => {
      return follower.id === state.user.id;
    });
    console.log('pivot', pivot[0].pivot.id);
    const token = await localStorage.getItem('token');
    const url = `http://mini-twitter.test/api/users/unfollow/${pivot[0].pivot.id}?token=${token}`;
    const r = await deleteRequest(url, {});
    console.log('Post r', r);
    if ('status' in r.data) {
      commit('SET_SNACK_BAR', { type: 'success', text: r.data.message, status: true });
    } else {
      commit('SET_SNACK_BAR', { type: 'error', text: r.data.error.messages[0][0], status: true });
    }
  },
};
