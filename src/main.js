// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./config/rem";

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import "@/assets/css/swiper.css";
import Cube from 'cube-ui'
Vue.use(Cube)


Vue.use(VueQuillEditor, /* { default global options } */)

// import moment from 'moment'

// 重置样式
import "./assets/css/base.styl";
Vue.config.productionTip = false;

// Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
//   return moment(dataStr).format(pattern)
// })

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
