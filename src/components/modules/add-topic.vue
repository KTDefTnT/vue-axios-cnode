<template>
  <div>
    <div class="form-wrapper">
      <div class="form-header header">
        新建主题
      </div>
      <el-form label-width="60px" :model="form" class="form-content">
        <el-row>
          <el-col :span="12">
            <el-form-item label="标题">
              <el-input placeholder="请输入主题标题" :rules="[{ required: true, message: '请输入到期日' }]" v-model="form.title"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="23">
             <el-form-item label="内容">
              <el-input  placeholder="请输入主题内容" type="textarea" :rules="[{ required: true, message: '请输入帖子内容'}]" v-model="form.content" :autosize="{ minRows: 6, maxRows: 16}"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-button type="primary" size="medium" @click="addTopic" plain>发布主题</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        title: '',
        content: '',
        tab: 'dev',
        accesstoken: '394686ea-c88a-4e05-80c1-ef425d6ada02'
      }
    };
  },
  methods: {
    addTopic () {
      this.$api.mock.cnode.addTopic(this.form).then(res => {
        if (res.success) {
          this.$notify({
            title: '发布成功',
            message: res.error_msg,
            duration: 2000
          });
        }
        this.$notify.error({
          title: '发布失败',
          message: res.error_msg,
          duration: 2000
        });
      });
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/scss/_index';
  .form-content {
    display: block;
    // padding-top: 100px;
    margin-top: 20px;
  }
</style>
