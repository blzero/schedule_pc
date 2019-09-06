import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router/router.js";
import store from "@/store/store.js";
import '@/style/reset.styl'
import '@/style/style.styl'
import request from '@/request/request.js';
import '@/tools/registerGlobal.js'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$request = request;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
