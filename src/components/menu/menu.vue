<template>
    <div class="z-menu">
        <el-menu
            :default-active="activeMenu"
            class="menu-list"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            active-text-color="#007cf9"
            text-color="#999999"
            @select="select"
        >
           <menu-item class="content"></menu-item>
        </el-menu>
    </div>
</template>

<script>
import menuItem from './menuItem';
import menuData from './menu';

import { mapState, mapMutations } from 'vuex'
export default {
    name: "ZMenu",
    data() {
        return {
            isCollapse: false,
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.findActiveMenu();
        });
    },
    watch: {
        '$route'(route) {
            this.findActiveMenu();
        }
    },
    components: {
        menuItem
    },
    computed: {
        ...mapState(['activeMenu'])
    },
    methods: {
        select(index, indexPath) {
            // console.log(index, indexPath);
        },
        findActiveMenu() {
            let routeName = this.$route.name;
            let path = '';
            let searchMenu = (menu) => {
                let next = [];
                for (let i = 0; i < menu.length; i++) {
                    let item = menu[i];
                    if (item.name === routeName) {
                        path += i;
                        this.setActiveMenu(path.split('').join('-'));
                        break;
                    };
                    if (item.children) {
                        next.push({
                            index: i,
                            children: item.children
                        });
                    }
                }

                if (next.length > 0) {
                    next.forEach(item => {
                        path = '';
                        path += item.index;
                        searchMenu(item.children);
                    });
                }
                return null;
            }
           searchMenu(menuData);
        },
        handleOpen(index, indexPath) {
            console.log("open", index, indexPath);
        },
        handleClose() {
            console.log("close");
        },
        ...mapMutations(['setActiveMenu'])
    }
};
</script>
<style lang="stylus" scoped>
.z-menu {
    width: 100%;
    height 100%;
    text-align center;
    overflow auto;
    // color #666;

    .menu-list {
        height 100%;
        overflow-y auto;
        overflow-x hidden;
    }
}
</style>