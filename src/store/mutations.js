import Vue from 'vue';

export default {
  SET_POSTS: (state, value) => {
    /* eslint-disable */
    let currentValue = state.posts || [];
    value.data.forEach(item => currentValue.push(item));
    /* eslint-disable */
    Vue.set(state, 'posts', currentValue);
    Vue.set(state, 'currentPage', value.current_page || 0);
    Vue.set(state, 'lastPage', value.last_page || '');
    Vue.set(state, 'nextPageUrl', value.next_page_url || '');
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
  SET_POST_DIALOG: (state, value) => {
    Vue.set(state, 'postDialog', value);
  },
  SET_POST_LOADING: (state, value) => {
    Vue.set(state, 'postSubmitLoading', value);
  },
  SET_SNACK_BAR: (state, value) => {
    Vue.set(state, 'snackBar', value);
  },
  SET_COMMENT_DIALOG: (state, value) => {
    Vue.set(state, 'commentDialog', value);
  },
  SET_COMMENTS: (state, value) => {
    Vue.set(state, 'comments', value);
  },
  SET_POST_ID: (state, value) => {
    Vue.set(state, 'postId', value);
  },
  SET_COMMENT_LOADING: (state, value) => {
    Vue.set(state, 'commentLoading', value);
  },
  SET_PROFILE_ID: (state, value) => {
    Vue.set(state, 'profileId', value);
  },
  SET_USER_POSTS: (state, value) => {
    console.log('user profile', value);
    Vue.set(state, 'profilePosts', value.posts);
    Vue.set(state, 'profileUser',
      {
        id: value.id,
        email: value.email,
        first_name: value.first_name,
        last_name: value.last_name
      });
  },
  RESET_POST_DATA: (state) => {
    Vue.set(state, 'posts', []);
  },
  SET_LIST_DIALOG: (state, value) => {
    Vue.set(state, 'listDialog', value);
  },
  SET_USERS_LIST: (state, value) => {
    Vue.set(state, 'usersList', value);
  },
  SET_FOLLOWERS: (state, value) => {
    Vue.set(state, 'followers', value);
  },
  SET_FOLLOWING: (state, value) => {
    Vue.set(state, 'following', value);
  },
  SET_USER_LIST_HEADER: (state, value) => {
    Vue.set(state, 'userListHeader', value);
  },
  SELECT_TRENDING: (state) => {
    Vue.set(state, 'tab', 1);
    Vue.set(state, 'feedComponent', 'TrendingFeed');
  },
  SELECT_LATEST: (state) => {
    Vue.set(state, 'tab', 0);
    Vue.set(state, 'feedComponent', 'LatestFeed');
  },
  SET_TRENDING_DATA: (state, value) => {
    console.log('st value', value)
    let data = [];
    value.forEach((list) => {
      list.forEach((item) => {
        data.push(item);
      });
    });
    data.sort((a, b) => {
      if (a.created_at < b.created_at){
        return 1;
      } else if (a.created_at > b.created_at){
        return -1;
      }
      return 0;
    })
    Vue.set(state, 'trendingPosts', data);
  },
  RESET_USER_DATA: (state) => {
    Vue.set(state, 'followers', []);
  },
  SET_POST_UPDATE: (state, value) => {
    Vue.set(state, 'postUpdate', value);
  },
  SET_POST_UPDATE_CONTENT: (state, value) => {
    Vue.set(state, 'postUpdateContent', value);
  },
  SET_COMMENT_UPDATE: (state, value) => {
    Vue.set(state, 'commentUpdate', value);
  },
  SET_COMMENT_UPDATE_CONTENT: (state, value) => {
    Vue.set(state, 'commentUpdateContent', value);
  },
};
