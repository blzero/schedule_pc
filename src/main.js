import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router/index.js";
import '@/style/reset.styl'
import request from '@/request/index.js';


Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$request = request;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
