<template>
  <div>
    <div class="content-header">{{title}}</div>
    <div class="content-list" v-for="data in datas" :key="data.itemid">
      <div class="author-content">
        <img v-if="data.author" :src="data.author.avatar_url" :title="data.author.loginname" @click="showUser(data.author.loginname)">
        <img v-else :src="data.avatar_url" title="data.author.loginname" @click="showUser(data.loginname)">
        <div class="counts" v-if="showCounts"><span class="reply">{{data.reply_count}}</span>/{{data.visit_count}}</div>
        <div class="item-type" v-if="showType" :class="{'top': data.top}">{{data.tab | types(data.top)}}</div>
      </div>
      <div class="list-item">
        <div class="item-title" :class="{'not-topic': !data.loginname}" @click="showDeatil(data)">{{data.title}}</div>
        <div class="item-time">
          <span>{{data.last_reply_at | date(true)}}</span>
        </div>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    datas: { // 数据
      type: Array,
      default () {
        return [];
      }
    },
    title: { // 标题
      type: String,
      default: '哈哈哈哈哈哈哈哈，我就是为了好看一点'
    },
    showCounts: { // 是否显示数量
      type: Boolean,
      default: true
    },
    showType: { // 是否显示类型
      type: Boolean,
      default: true
    }
  },
  methods: {
    showUser (loginname) {
      this.$router.push({name: 'demo.cnode.userInfo', params: {loginname: loginname}});
    },
    showDeatil (row) {
      this.$router.push({name: 'demo.cnode.detail', params: row});
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../../assets/scss/_index';
  @import '../../../assets/scss/mixin';
  .content-header {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: left;
    padding-left: 20px;
    background-color: $border-color-light;
    border-radius: 4px 4px 0 0;
  }
  .content-list {
    display: flex;
    align-items: center;
    // border: 1px solid $danger-color;
    padding: 6px 0px;
    border-bottom: 1px solid $border-color-light;
    &:hover {
      background-color: $border-color-light;
    }
    .author-content {
      display: flex;
      align-items: center;
      max-width: 170px;
      margin-right: 15px;
      img {
        margin-left: 12px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        border-radius: 2px;
      }
      .counts {
        width: 70px;
        font-size: 12px;
        padding-left: 5px;
        color: $border-color;
        .reply {
          color: $font-color-light;
          font-weight: 600;
        }
      }
      .item-type {
        display: block;
        padding: 0px 6px;
        height: 22px;
        line-height: 22px;
        border-radius: 2px;
        font-size: 12px;
        // tranfrom: slew(0.8);
        color: $font-color;
        background-color: $background-color;
        box-shadow: 2px 2px 2px $border-color;
        &.top {
          color: $main-background-color;
          background-color: $primary-color;
        }
      }
    }
    .list-item {
      flex: 1;
      display: flex;
      justify-content: space-between;
      padding-right: 10px;
      .item-title {
        text-align: left;
        cursor: pointer;
        font-size: 16px;
        max-width: 630px;
        @include text-ellipsis;
        &:hover {
          text-decoration: underline;
        }
        &.not-topic {
          color: $link-color;
        }
      }
      .item-time {
        color: $font-color;
      }
    }
  }
</style>
