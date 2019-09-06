<template>
    <transition :name="routerAnimation.name" appear :mode="routerAnimation.mode">
        <slot></slot>
    </transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'transitionView',
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['routerAnimation'])
    },
};
</script>
<style lang="stylus" scoped>

</style>