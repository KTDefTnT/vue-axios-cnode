<template>
  <div>
    <div class="content-wrapper">
      <div class="left-content">
        <router-view></router-view>
      </div>
      <div class="right-content">
        <el-button type="primary" size="medium" style="margin-top: 35px;" @click="addTopic">新建主题</el-button>
        <div class="girl">
          webpack
          <!-- 一个快乐的小仙女/ -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addTopic () {
      this.$router.push({name: 'demo.cnode.addTopic'});
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../assets/scss/_index';
  .content-wrapper {
    display: flex;
    max-width: 1260px;
    min-height: 540px;
    height: 100%;
    margin: 0 auto;
    .left-content {
      flex: 1;
      max-width: 950px;
      margin-right: 10px;
      background-color: $main-background-color;
      box-shadow: 3px 3px 3px $border-shadow-color;
      border-radius: 4px;
    }
    .right-content {
      position: relative;
      min-width: 300px;
      border-radius: 4px;
      box-shadow: 2px 2px 2px $border-shadow-color;
      background-color: $main-background-color;
      .girl {
        width: 60px;
        margin: 10px auto;
        color: $danger-color;
        font-size: 40px;
        line-height: 50px;
        word-wrap: break-word;
        text-shadow:3px 3px 1px #ccc;
      }
    }
  }
</style>
