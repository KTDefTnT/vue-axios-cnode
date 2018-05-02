<template>
  <div>
    <div class="info-wrapper">
      <img :src="data.avatar_url">
      <span class="loginname">{{data.loginname}}</span>
      <span class="score">{{data.score}}&nbsp;积分</span>
      <div class="githubname">
        <i class="iconfont icon-github"></i>@{{data.githubUsername}}
      </div>
      <div class="create-time">最近回复时间&nbsp;&nbsp;{{data.create_time| date(true)}}</div>
    </div>
    <div class="recent_topics">
      <list-content title="最近创建的话题" :showCounts="false" :showType="false" :datas="data.recent_topics">
        <div class="load-topics">
          <el-button type="text">查看更多</el-button><i class="iconfont icon-more"></i>
        </div>
      </list-content>
    </div>
    <div class="recent_replies">
      <list-content title="最近参与的话题" :showCounts="false" :showType="false" :datas="data.recent_replies">
        <div class="load-topics">
          <el-button type="text">查看更多</el-button><i class="iconfont icon-more"></i>
        </div>
      </list-content>
    </div>
  </div>
</template>
<script>
import listContent from './sub/list.vue';
export default {
  data () {
    return {
      data: []
    };
  },
  components: {
    listContent
  },
  created () {
    this.$api.mock.cnode.getUserTopic(this.$route.params.loginname).then(ret => {
      this.data = ret;
    });
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/scss/_index';
  @import '../../assets/scss/mixin';
  .info-wrapper,  .recent_topics{
    position: relative;
    border-radius: 4px;
    margin-bottom: 20px;
    text-align: left;
    padding: 10px;
    &:after {
      content: '';
      width: 100%;
      height: 20px;
      background-color: #e1e1e1;
      position: absolute;
      left: 0;
      bottom: -20px;
    }
    img {
      width: 40px;
      height: 40px;
      float: left;
      border-radius: 4px;
    }
    .loginname, .githubname {
      display: block;
      margin-top: 6px;
      font-size: 15px;
      padding-left: 50px;
      color: $font-color-light;
    }
    .githubname {
      display: block;
      margin: 0px;
      padding-left: 5px;
    }
    .score {
      display: block;
      margin-top: 35px;
      font-size: 14px;
      color: $font-color;
    }
    .create-time {
      display: block;
      margin: 20px 0;
      font-size: 14px;
      color: $font-color-light;
    }
  }
  .load-topics {
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
    font-size: 14px;
    cursor: pointer;
    button {
      color: $font-color;
    }
  }
  .iconfont {
    line-height: 40px;
    font-size: 15px;
    margin-right: 6px;
  }
  .recent_replies {
    margin-bottom: 0px;
  }
  .recent_topics {
    padding: 0px;
  }
</style>
