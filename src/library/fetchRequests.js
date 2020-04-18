import axios from 'axios';

export async function getRequest(url) {
  console.log(url);
  // await commit('setLoaderActiveTrue')
  let r;
  try {
    r = await axios.get(`${url}`);
    console.log('get request', url, r);
  } catch (error) {
    // dispatch('processError', error.response)
    r = null;
  }
  // await commit('setLoaderActiveFalse')
  return r;
}

export const x = 5;
