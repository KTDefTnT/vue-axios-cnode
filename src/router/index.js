// import Hello from '../components/Hello';
export default [
  {
    desc: '',
    path: '',
    name: 'demo',
    redirect: '/cnode/content/good',
    component (resolve) {
      // require(['components/modules/governor/main.vue'], resolve);
      require.ensure([], () => resolve(require('components/main.vue')), 'demo');
    },
    meta: {requiresAuth: true, dynamicMenus: true},
    children: [
      {
        desc: '业务模块',
        path: 'cnode',
        name: 'demo.cnode',
        component (resolve) {
          // require(['components/modules/governor/main.vue'], resolve);
          require.ensure([], () => resolve(require('components/layout.vue')), 'demo.cnode');
        },
        children: [
          {
            desc: '精华',
            path: 'content/:type',
            name: 'demo.cnode.content',
            component (resolve) {
              require.ensure([], () => resolve(require('components/modules/content.vue')), 'demo.cnode.content');
            }
          },
          {
            desc: '详情',
            path: 'detail',
            name: 'demo.cnode.detail',
            component (resolve) {
              require.ensure([], () => resolve(require('components/modules/detail.vue')), 'demo.cnode.detail');
            }
          },
          {
            desc: '详情',
            path: 'userInfo',
            name: 'demo.cnode.userInfo',
            component (resolve) {
              require.ensure([], () => resolve(require('components/modules/user-info.vue')), 'demo.cnode.user-info');
            }
          },
          {
            desc: '详情',
            path: 'addTopic',
            name: 'demo.cnode.addTopic',
            component (resolve) {
              require.ensure([], () => resolve(require('components/modules/add-topic.vue')), 'demo.cnode.add-topic');
            }
          }
        ]
      }
    ]
  }
];
