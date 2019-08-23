<template>
    <div class="z-menu">
        <el-menu
            default-active=""
            class="menu-list"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            active-text-color="#007cf9"
            text-color="#999999"
        >
            <template v-for="(menu, index) in menuData">
                <el-submenu v-if="menu.children.length > 0" :index="index.toString()" :key="index">
                    <template #title>
                        <i class="el-icon-location"></i>
                        <span>{{menu.name}}</span>
                    </template>
                    <z-menu :menuData="menu.children"></z-menu>
                </el-submenu>

                <el-menu-item v-else :index="index.toString()" :key="index">
                    <span slot="title">{{menu.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import menuData from "./menu";
export default {
    name: "ZMenu",
    props: {
        menuData: {
            type: Array,
            default: () => {
                return menuData;
            }
        }
    },
    data() {
        return {
            isCollapse: false
        };
    },

    components: {},
    methods: {
        handleOpen(index, indexPath) {
            console.log("open", index, indexPath);
        },
        handleClose() {
            console.log("close");
        }
    }
};
</script>
<style lang="stylus" scoped>
.z-menu {
    width: 100%;
    height 100%;
    text-align center;
    // color #666;

    .menu-list {
        height 100%;
    }
    .el-menu-item {
        padding: 0 0 0 40px;
        font-size: 0.8em;
    }
}
</style>