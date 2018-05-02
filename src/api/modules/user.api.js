// require('./mock');
import axios from 'axios';

export default {
  getUserInfo: (obj) => {
    let url = '/user/info';
    return axios.post(url, obj).then(resp => {
      console.log(resp);
      return resp.data.data;
    });
  },
  getMenuTree: (obj) => {
    let url = '/menu/routes';
    return axios.post(url, obj).then(resp => {
      return resp.data;
    });
  }
};
