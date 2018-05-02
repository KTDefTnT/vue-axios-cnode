<template>
  <div>
    <div class="detail-wrapper" v-loading="loading">
      <div class="top-content">
        <div class="title-content">
          <span class="tab">{{data.tab | types(data.top)}}</span>
          <span class="title">{{data.title}}</span>
        </div>
        <div class="decription">
          • 发布于{{data.last_reply_at | date(true)}} • 作者 {{name}} • {{data.visit_count}}次浏览 • 最后一次编辑 {{data.last_reply_at | date(true)}} • 来自  {{data.tab | types('')}}
        </div>
      </div>
      <div class="detail-content" v-html="data.content"></div>
    </div>
    <div class="reply-wrapper">
      <div class="reply-header">
        {{reply_counts}}&nbsp;回复数
      </div>
      <div v-for="(item, index) in data.replies" :key="item.id">
        <div class="reply-list">
          <div class="reply-top">
            <img :src="item.author.avatar_url" >
            <div class="reply-info">
              <span class="reply-name">{{item.author.loginname}}</span>
              <span>{{index + 1}}楼 • {{item.create_at | date(true)}}</span>
              <span class="tab" v-if="item.author.loginname === name">作者</span>
            </div>
            <span class="dianzan" @click="replyUpDown(item)">
              <i class=" icons iconfont icon-dianzan1"></i>
              <span v-if="(item.reply_id === upDownId) && item.reply_id">{{currentValue}}</span>
              <span v-else>{{item.ups.length}}</span>
            </span>
          </div>
          <div class="reply-content" v-html="item.content"></div>
        </div>
      </div>
    </div>
    <div class="reply-content">
      <div class="header">
        回复
      </div>
      <el-input type="textarea" v-model="form.content" :autosize="{ minRows: 6, maxRows: 16}"></el-input>
      <el-button size="medium" type="primary" class="sure" @click="submitReply">回复</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [],
      name: '',
      detailId: '',
      reply_counts: 0,
      upDownId: '',
      currentValue: 0,
      form: {
        content: '',
        accesstoken: '394686ea-c88a-4e05-80c1-ef425d6ada02'
      },
      topic_id: '',
      loading: false
    };
  },
  methods: {
    replyUpDown (item) {
      if (item.reply_id) {
        this.$api.mock.cnode.giveGood(item.reply_id).then(ret => {
          this.upDownId = item.reply_id;
          if (ret.success && ret.action === 'up') {
            this.currentValue = 1 + item.ups.length;
          } else if (ret.success && ret.up === 'down') {
            this.currentValue = item.ups.length - 1;
          } else {
            this.currentValue = item.ups.length;
          }
        });
      } else {
        this.$notify.error({
          title: '点赞失败',
          message: '不能给此用户点赞！',
          duration: 1000
        });
      }
    },
    submitReply () {
      this.$api.mock.cnode.addReply(this.form, this.topic_id).then(ret => {
        if (ret.success) {
          this.getTopicDeatil(this.detailId);
        } else {
          this.$notify.error({
            title: '回复失败',
            message: '请重新回复！！',
            duration: 1000
          });
        }
      });
    },
    getTopicDeatil (id) {
      this.loading = true;
      this.$api.mock.cnode.getTopicDetail(id).then(ret => {
        if (ret.success) {
          this.loading = false;
          this.data = ret.data;
          this.topic_id = ret.data.id;
          this.reply_counts = ret.data.replies.length;
          this.name = this.data.author.loginname;
        } else {
          this.$alert(ret.data, '加载失败', {
            type: 'warning'
          }).then(res => {
            this.$router.push({path: '/cnode/content/good'});
          });
        }
      });
    }
  },
  created () {
    this.detailId = this.$route.params.id;
    this.getTopicDeatil(this.$route.params.id);
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/scss/_index';
  @import "../../assets/scss/mixin";
  .tab {
    display: inline-block;
    text-align: center;
    padding: 0px 6px;
    margin: 0px 10px 5px 0;
    width: 40px;
    height: 20px;
    line-height: 20px;
    border-radius: 2px;
    font-size: 12px;
    color: $font-color;
    background-color: $background-color;
    &.top {
      color: $main-background-color;
      background-color: $primary-color;
    }
  }
  .detail-wrapper {
    border-radius: 4px 4px 0px 0px;
    border-bottom: 20px solid #e1e1e1;
    .top-content {
      padding: 15px 10px;
      text-align: left;
      border-bottom: 1px solid $border-color-light;
      .title-content {
        padding-bottom: 10px;
        .title {
          font-size: 24px;
          font-weight: 900;
        }
      }
      .decription {
        color: $font-color-light;
        font-size: 14px;
      }
    }
    .detail-content {
      padding: 15px 10px;
    }
  }
  .reply-wrapper {
    display: block;
    position: relative;
    border-radius: 4px;
    .reply-header {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      text-align: left;
      font-size: 15px;
      color: $font-color;
      background-color: $border-color-light;
      border-radius: 4px 4px 0px 0px;
    }
    .reply-list {
      display: block;
      padding: 10px;
      border-bottom: 1px solid $border-color-light;
      @include clearfix;
      .reply-top {
        @include clearfix;
        img {
          width: 30px;
          height: 30px;
          float: left;
          margin-right: 15px;
          border-radius: 2px;
        }
        .reply-info {
          float: left;
          font-size: 14px;
          span {
            color: $link-color;
          }
          .reply-name {
            color: $font-color;
            font-weight: 500;
            margin-right: 5px;
          }
        }
        .dianzan {
          float: right;
          font-size: 14px;
          padding-right: 20px;
          .icons {
            cursor: pointer;
            margin-right: 3px;
          }
        }
      }
      .reply-content {
        margin-top: -10px;
        margin-left: 45px;
        float: left;
      }
    }
  }
  .reply-content {
    width: 100%;
    margin: 0px auto;
    position: relative;
    .header {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      text-align: left;
      padding-left: 20px;
      background-color: $border-color-light;
    }
    .el-textarea__inner {
      border-radius: 0px;
      border-left: 3px solid $border-color-light;
      border-right: 3px solid $border-color-light;
    }
    .sure {
      position: absolute;
      right: 15px;
      bottom: 5px;
    }
  }
  .markdown-text {
    margin: 0 10px;
    img {
      max-width: 900px;
      max-height: 600px;
      display: inline-block;
    }
    strong {
      font-weight: 700;
    }
    h1,h2,h3,h4, {
      font-size: 32px;
      font-weight: 800;
      text-align: left;
      padding-bottom:6px;
      margin-bottom: 15px;
      border-bottom:  1px solid $border-color-light;
    }
    h1:first-child {
      margin-top: 0px;
    }
    h1 {
      margin-top: 30px;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 22px;
    }
    h4 {
      font-size: 16px;
    }
    hr {
      margin: 20px 0;
      border: 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #fff;
    }
    ol, ul {
      text-align: left;
      padding: 5px 0px;
      margin-left: 30px;
      font-size: 14px;
      font-weight: 600;
      li {
        list-style-type: decimal;
        line-height: 1.5em;
        padding: 5px 0px;
      }
    }
    ul {
      li {
        list-style-type: disc;
      }
    }
    blockquote {
      padding: 0 0 0 15px;
      // margin: 0 0 20px;
      border-left: 5px solid #eee;
      display: block;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      p {
        color: $font-color-light;
      }
    }
    code {
      width: 100%;
      text-align: left;
      font-size: 12px;
      font-weight: 500;
      margin: 0 1px;
      padding: 1px 4px;
      border-radius: 2px;
      color: #000;
      background-color: #fcfafa;
      padding: 4px 6px;
    }
    .prettyprint {
      font-size: 14px;
      border-radius: 2px;
      padding: 5px 15px;
      border: none;
      margin: 20px -10px;
      border-width: 1px 0;
      background: #f7f7f7;
      -o-tab-size: 4;
      -moz-tab-size: 4;
      tab-size: 4;
      code {
        display: inherit;
        text-align: left;
        background-color: inherit;
        width: 100%;
        span {
          padding: 2px 0;
        }
      }
    }
    a {
      font-size: 14px;
      color: $link-color;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      max-width: 97%;
      font-size: 15px;
      line-height: 1.7em;
      margin-bottom: 10px;
      text-align: left;
      margin-bottom: 1em;
      img {
        max-width: 850px;
      }
      strong {
        display: inline-block;
        margin-bottom: 5px;
      }
    }
  }
</style>
