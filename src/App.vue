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
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import zHeader from "./layout/header";
import siderBar from "./layout/siderbar";

import UserInfo from '@/service/userInfo.js'

export default {
    name: "app",
    mounted() {
      UserInfo.getUserInfo().then(res => {
        console.log(res);
      });
    },
    components: {
        zHeader,
        siderBar
    }
};
</script>

<style lang="stylus">
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
