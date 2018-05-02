import moment from 'moment';
export default function (value, fromNow = false) {
  if (value && !fromNow) {
    return moment(value).format('YYYY-MM-DD hh:mm:ss');
  } else {
    return moment(value).fromNow();
  }
  // moment('gibberish').format('YYYY MM DD');
  // 2015-07-11T09:20:52.975Z
};
