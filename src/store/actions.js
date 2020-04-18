import { getRequest } from '../library/fetchRequests';

export default {
  async FETCH_POSTS({ commit }) {
    const url = `${process.env.VUE_APP_POST_BASE_URL}/posts`;
    const r = await getRequest(url);
    if (r) {
      commit('SET_POSTS', r.data.data);
    }
  },
};
