const Types = {
  'ask': '问答',
  'share': '分享',
  'job': '招聘',
  'good': '分享'
};

export default function (value, top = false) {
  if (top) {
    return '置顶';
  } else {
    return value ? Types[value] : '其他';
  }
};
