import Mock from 'mockjs';
import routes from '../../router';

// 获取用户信息
Mock.mock('/user/info', {
  'data|6': [
    {
      'username|1': [
        '张学友',
        '黎明',
        '郭富城',
        '刘德华'
      ],
      'userId': 'isisn283283njss',
      'usercode': '0001',
      'age': 23,
      'sex|1': [
        'boy',
        'girl'
      ],
      'major|1': [
        'web前端工程师',
        'java工程师',
        'php工程师',
        'ios工程师',
        'python工程师'
      ]
    }
  ]
});
Mock.mock('/menu/routes', () => {
  return routes;
});
// export default {
//   getUserInfo
// };
