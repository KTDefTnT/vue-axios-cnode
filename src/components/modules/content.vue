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
    '$route' (to, from) {
      this.datas = [];
      this.getContent(this.$route.params.type, 1);
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
    this.type = this.$route.params.type ? this.$route.params.type : 'good';
    console.log(this.type);
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
