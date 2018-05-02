<template>
  <div>
    <header>
      <el-tabs v-model="type" @tab-click="handleClick">
        <el-tab-pane label="精华" name="good"></el-tab-pane>
        <el-tab-pane label="分享" name="share"></el-tab-pane>
        <el-tab-pane label="问答" name="ask"></el-tab-pane>
        <el-tab-pane label="招聘" name="job"></el-tab-pane>
      </el-tabs>
    </header>
    <router-view></router-view>
    <footer class="footer-container">
      这是页脚
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: 'good'
    };
  },
  methods: {
    handleClick () {
      let obj = {};
      this.$set(obj, 'type', this.type);
      // this.$router.push({path: `/cnode/content/${this.type}`});
      this.$router.push({name: 'demo.cnode.content', query: obj});
      // console.log(obj);
    }
  },
  created () {
    this.handleClick();
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/_index';
  @import '../assets/scss/_variables';
  header {
    height: $header-height;
    background-color: $background-color;
    margin-bottom: 10px;
  }
  .el-tabs__header {
    margin: 0px !important;
    height: 60px;
    line-height: 60px;
    .el-tabs__nav {
      left: 50%;
      // padding: 0 10px;
      margin-left: -246px;
      .el-tabs__item {
        padding: 0 40px;
      }
    }
  }
  .footer-container {
    max-width: 1260px;
    height: 80px;
    margin: 20px auto;
    border: 1px solid red;
  }
</style>
