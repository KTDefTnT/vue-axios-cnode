<template>
  <div>
    <list-content :datas="datas" title="为了显示得好看点，设置class为 header可以共用此header样式">
      <div class="load-more">
        <el-button v-if="showLoad" type="text" :loading="loading" @click="loadMore">加载更多..</el-button>
        <div v-else>没有更多了......</div>
      </div>
    </list-content>
  </div>
</template>
<script>
import listContent from './sub/list.vue';
export default {
  data () {
    return {
      datas: [],
      pageSize: 15,
      page: 1,
      loading: false,
      showLoad: true,
      type: ''
    };
  },
  components: {
    listContent
  },
  watch: {
    // 切换不同的参数使用同一个路由，路由的params不会传值，解决的方法:
    // 1、将传值的参数改为query
    // 2、使用this.$router.push({path: '/path/${id}'});进行传值
    '$route' (to, from) {
      this.datas = [];
      this.type = to.query.type ? to.query.type : 'good';
      this.getContent(this.$route.query.type, 1);
    }
  },
  methods: {
    loadMore () {
      this.getContent(this.type, this.page++);
    },
    getContent (type, page = this.page) {
      this.loading = true;
      let obj = {
        limit: this.pageSize,
        page: page,
        tab: type
      };
      this.$api.mock.cnode.getTopics(obj).then(ret => {
        if (ret) {
          this.datas = [...this.datas, ...ret];
          // console.log(this.datas);
          // for (let i = 0; i < data.length; i++) {
          //   this.$set(this.datas, i, data[i]);
          // }
        } else {
          this.showLoad = false;
        }
        this.loading = false;
      });
    }
  },
  created () {
    this.type = this.$route.query.type ? this.$route.query.type : 'good';
    this.getContent(this.type);
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/scss/_index';
  @import "../../assets/scss/mixin";
  .load-more {
    display: block;
    padding: 10px 0;
  }
</style>
