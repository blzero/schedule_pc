<template>
    <div id="app">
        <el-container class="main">
            <z-header></z-header>
            <el-container class="content">
                <el-aside width="200px">
                    <sider-bar></sider-bar>
                </el-aside>
                <el-container>
                    <el-main>
                        <transition-view></transition-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import zHeader from "./layout/header";
import siderBar from "./layout/siderbar";

import { mapActions } from 'vuex'
export default {
    name: "app",
    data() {
        return {
            userTimer: null,
        }
    },
    mounted() {
        this.getUserInfo();
        this.userTimer = setInterval(() => {
           this.getUserInfo(); 
        }, 1000 * 60 * 15);
    },
    components: {
        zHeader,
        siderBar
    },
    methods: {
        ...mapActions(['getUserInfo'])
    }
};
</script>

<style lang="stylus" scoped>
#app {
    height: 100vh;
    overflow: auto;

    .main {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .content {
        flex: 1;
        overflow: auto;
    }
    
}
</style>
