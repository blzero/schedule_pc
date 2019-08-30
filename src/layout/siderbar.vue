<template>
    <div class="siderbar">
        <z-menu></z-menu>
    </div>
</template>

<script>
import zMenu from '@/components/menu/menu.vue'
export default {
    name: 'siderBar',
    components: {
        zMenu
    },
    mounted() {
       
    },
};
</script>
<style lang="stylus" scoped>
    .siderbar {
        width 100%;
        height 100%;
        overflow auto;
    }
</style>