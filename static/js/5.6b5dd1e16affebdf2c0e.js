webpackJsonp([5],{Ln9B:function(e,t){},raZW:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-wrapper"},[r("div",{staticClass:"form-header header"},[e._v("\n      新建主题\n    ")]),e._v(" "),r("el-form",{staticClass:"form-content",attrs:{"label-width":"60px",model:e.form}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{attrs:{placeholder:"请输入主题标题",rules:[{required:!0,message:"请输入到期日"}]},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:23}},[r("el-form-item",{attrs:{label:"内容"}},[r("el-input",{attrs:{placeholder:"请输入主题内容",type:"textarea",rules:[{required:!0,message:"请输入帖子内容"}],autosize:{minRows:6,maxRows:16}},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-button",{attrs:{type:"primary",size:"medium",plain:""},on:{click:e.addTopic}},[e._v("发布主题")])],1)],1)],1)])},staticRenderFns:[]};var o=r("VU/8")({data:function(){return{form:{title:"",content:"",tab:"dev",accesstoken:"394686ea-c88a-4e05-80c1-ef425d6ada02"}}},methods:{addTopic:function(){var e=this;this.$api.mock.cnode.addTopic(this.form).then(function(t){t.success&&e.$notify({title:"发布成功",message:t.error_msg,duration:2e3}),e.$notify.error({title:"发布失败",message:t.error_msg,duration:2e3})})}}},a,!1,function(e){r("Ln9B")},null,null);t.default=o.exports}});
//# sourceMappingURL=5.6b5dd1e16affebdf2c0e.js.map