<template>
    <div class="siderbar">
        <z-menu></z-menu>
    </div>
</template>

<script>
import zMenu from '@/components/menu.vue'
export default {
    name: 'siderBar',
    components: {
        zMenu
    }
};
</script>
<style lang="stylus" scoped>
    .siderbar {
        width 100%;
        height 100%;
    }
</style>