import axios from 'axios';
import config from '../config';
import qs from 'qs';
// 1、降级处理
// 2、qs处理
// 3、proxyTable
// Access Token: 394686ea-c88a-4e05-80c1-ef425d6ada02

export default {
  getTopics: (data) => { // 获取主题与帖子
    let url = config.baseURL + '/topics';
    return axios.get(url, {params: data}).then(res => {
      return res.data.data;
    });
  },
  getTopicDetail: (id) => { // 获取帖子详情与回复
    let url = config.baseURL + '/topic/' + id;
    return axios.get(url).then(res => {
      return res.data;
    });
  },
  giveGood: (id) => { // 给回复点赞
    let url = config.baseURL + '/reply/' + id + '/ups ';
    let obj = {
      accesstoken: '394686ea-c88a-4e05-80c1-ef425d6ada02'
    };
    return axios.post(url, qs.stringify(obj)).then(res => {
      return res.data;
    });
  },
  getUserTopic: (loginname) => { // 获取用户信息
    let url = config.baseURL + '/user/' + loginname;
    return axios.get(url).then(res => {
      return res.data.data;
    });
  },
  addTopic: (obj) => { // 新建主题
    let url = config.baseURL + '/topics';
    return axios.post(url, obj).then(res => {
      console.log(res);
      return res.data.data;
    }).catch(error => {
      return error.response.data;
    });
  },
  addReply: (obj, topicId) => { // 新建评论
    let url = config.baseURL + '/topic/' + topicId + '/replies';
    return axios.post(url, obj).then(res => {
      console.log(res);
      return res.data;
    });
  }
};
