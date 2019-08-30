<template>
    <div class="z-menu-item">
        <template v-for="(menu, index) in menuData">
            <el-submenu v-if="menu.children.length > 0" :index="index.toString()" :key="index">
                <template #title>
                    <i :class="menu.icon"></i>
                    <span>{{menu.meta.title}}</span>
                </template>
                <menu-item :menuData="menu.children" :itemIndex="index"></menu-item>
            </el-submenu>

            <el-menu-item :route="menu" v-else :index="itemIndex + '-' + index" :itemIndex="index" :key="itemIndex + index">
                <router-link tag="p" :to="{ name: menu.name,}" slot="title">
                    {{menu.meta.title}}
                </router-link>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
import menuData from "./menu";
export default {
    name: "menuItem",
    props: {
        menuData: {
            type: Array,
            default: () => {
                return menuData;
            }
        },
        itemIndex: Number
    },
    data() {
        return {
            isCollapse: false
        };
    },
};
</script>
<style lang="stylus" scoped>
.z-menu-item {
    .el-menu-item {
        padding: 0 0 0 40px;
        font-size: 0.8em;
    }
}
</style>