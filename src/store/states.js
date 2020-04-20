export default {
  posts: null,
  currentPage: null,
  lastPage: null,
  nextPageUrl: null,
  loader: false,
  authStatus: false,
  user: null,
  loginError: null,
  loginLoading: false,
  signupError: null,
  signupLoading: false,
  postDialog: false,
  postSubmitLoading: false,
  snackBar: {
    type: '',
    text: '',
    status: false,
  },
  commentDialog: false,
  comments: [],
  postId: null,
  commentLoading: false,
  profileId: null,
  profileUser: null,
  profilePosts: [],
  listDialog: false,
  usersList: [],
  followers: [],
  following: [],
  userListHeader: '',
};
