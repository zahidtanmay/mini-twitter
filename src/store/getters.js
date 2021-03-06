export default {
  getPosts: (state) => state.posts,
  getTrendingPosts: (state) => state.trendingPosts,
  isAuthenticated: (state) => state.authStatus,
  getUser: (state) => state.user,
  getLogInError: (state) => state.loginError,
  getLogInLoading: (state) => state.loginLoading,
  getSignUpError: (state) => state.signupError,
  getSignUpLoading: (state) => state.signupLoading,
  getPostSubmitLoading: (state) => state.postSubmitLoading,
  getSnackBar: (state) => state.snackBar,
  getCommentDialog: (state) => state.commentDialog,
  getComments: (state) => state.comments,
  getProfileUser: (state) => state.profileUser,
  getProfilePosts: (state) => state.profilePosts,
  getUserList: (state) => state.usersList,
  getUserListHeader: (state) => state.userListHeader,
  getFollowers: (state) => state.followers,
  getFollowees: (state) => state.following,
  getFeedComponent: (state) => state.feedComponent,
  getPostDialog: (state) => state.postDialog,
  getPostUpdate: (state) => state.postUpdate,
  getPostUpdateContent: (state) => state.postUpdateContent,
  getCommentUpdate: (state) => state.commentUpdate,
  getCommentUpdateContent: (state) => state.commentUpdateContent,
};
