import Vue from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

function convertToDay(date) {
  dayjs.extend(relativeTime);
  return dayjs(date).fromNow();
}

Vue.filter('day', (val) => convertToDay(val));
