import { getRequest } from '../library/fetchRequests';

export default {
  async FETCH_POSTS() {
    const url = `${process.env.VUE_APP_POST_BASE_URL}/posts`;
    const r = await getRequest(url);
    if (r) {
      console.log('post response', r);
    }
  },
};
