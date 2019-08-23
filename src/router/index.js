import Vue from "vue";
import VueRouter from "vue-router";

import scheduleManagement from './scheduleManagement';

Vue.use(VueRouter);



const routers = [
    {
        path: '/',
        name: 'app',
        component: () => import(/* webpackChunkName: "home" */ '@/App.vue')
    },
    {
        path: "*",
        name: "Not Found"
    }
];

routers.concat(scheduleManagement);

const router = new VueRouter({
  routers
});

export default router;
