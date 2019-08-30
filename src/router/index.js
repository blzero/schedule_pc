import Vue from "vue";
import VueRouter from "vue-router";

import menuData from '@/components/menu/menu.js';

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
        component: () => import(/* webpackChunkName: "home" */ '@/pages/home/home.vue')
    },
];

routes = routes.concat(menuData);

routes.push({
    path: "*",
    name: "Not Found"
});
const router = new VueRouter({
    routes
});

export default router;