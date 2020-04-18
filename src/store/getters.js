export default {
  getPosts: (state) => state.posts,
  isAuthenticated: (state) => state.authStatus,
  getUser: (state) => state.user,
  getLogInError: (state) => state.loginError,
  getLogInLoading: (state) => state.loginLoading,
};
