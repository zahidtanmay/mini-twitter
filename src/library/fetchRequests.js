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

export async function postRequest(url, data) {
  console.log('post request', url, data);
  try {
    return await axios.post(`${url}`, { ...data });
  } catch (e) {
    return e.response;
  }
}

export async function deleteRequest(url, data) {
  console.log('delete request', url, data);
  try {
    return await axios.delete(`${url}`, { ...data });
  } catch (e) {
    return e.response;
  }
}
