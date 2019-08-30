<template>
    <header class="z-header">
        <div v-if="userInfo" class="logo">
            <img v-if="userInfo.companyLogo" :src="userInfo.companyLogo" class="img-logo" alt />
            <i v-else class="img-logo iconfont icon-icon-test"></i>
            <p class="company-name">{{userInfo.companyName}}</p>
        </div>

        <div v-if="userInfo" class="user-info">
            <div class="go-home">
                <p @click="goHome">返回首页</p>
            </div>
            <el-popover placement="bottom" trigger="click">
                <ul class="pop-list">
                    <li @click="logout">退出登录</li>
                </ul>
                <el-button class="user-name" type="text" slot="reference">
                    {{userInfo.name}}
                    <i class="el-icon-arrow-down"></i>
                </el-button>
            </el-popover>
            <img
                class="user-avatar"
                v-if="userInfo.userHeadImage"
                :src="userInfo.userHeadImage"
                alt
            />
            <img v-else class="user-avatar" src="@/assets/default_avatar2.png" alt />
        </div>
    </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "zHeader",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {
        logout() {
            console.log("logout");
        },
        goHome() {
            this.$router.replace({path: '/'});
            this.setActiveMenu('');
        },
        ...mapMutations(['setActiveMenu'])
    },
    computed: {
        ...mapState(["userInfo"])
    }
};
</script>
<style lang="stylus" scoped>
color = #fff;

.z-header {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #5189e3;
    color: color;
    padding: 0 20px;

    .logo {
        .img-logo {
            width: 140px;
            font-size: 42px;
        }

        display: flex;
        align-items: center;
    }

    .user-info {
        display: flex;
        align-items: center;

        .go-home {
            cursor pointer;
        }

        .user-name {
            color: color;
            margin: 0 20px;
        }

        .user-avatar {
            width: 32px;
        }
    }
}
</style>

<style lang="stylus">
.pop-list {
    li {
        cursor: pointer;
    }
}
</style>