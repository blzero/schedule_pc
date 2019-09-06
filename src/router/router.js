import Vue from "vue";
import VueRouter from "vue-router";
let requireComponent = require.context(
    // 其组件目录的相对路径
    './',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /[A-Z]\w+\.(vue|js)$/
  )
let subRoutes = [];
requireComponent.keys().forEach(name => {
const route = requireComponent(name);
    subRoutes.push(route.default);
})
Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        name: 'app',
        redirect: {name: 'home'},
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/home/home.vue'),
        meta: {
            title: '人力排班'
        }
    },
    ...subRoutes,
    {
        path: "*",
        name: "Not Found"
    }
];

const router = new VueRouter({
    routes
});

export default router;