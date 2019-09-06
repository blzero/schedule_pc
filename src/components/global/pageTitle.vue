<template>
    <div class="page-title">
        <div class="left">
            <slot>
                <span>{{title}}</span>
            </slot>
            <slot name="other"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "pageTitle",
    data() {
        return {
            title: this.$route.meta.title
        };
    },
    mounted() {},
    watch: {
        $route(route) {
            this.title = route.meta.title;
        }
    }
};
</script>
<style lang="stylus" scoped>
.page-title {
    display flex;
    align-items center;
    font-size: 16px;
    justify-content space-between;
    .center {
        flex 1;
    }
    .right {
        font-size 14px;
    }
}
</style>