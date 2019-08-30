<template>
    <transition-group :name="routerAnimation.name" appear :mode="routerAnimation.mode">
       <p class="route-title" key="route-title">
            <slot></slot>
       </p>
        <router-view key="main">
        </router-view>
    </transition-group>
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