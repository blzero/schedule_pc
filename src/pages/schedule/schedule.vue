<template>
    <div class="schedule">
            <!-- <page-title></page-title> -->
            <transition-view>
                <router-view></router-view>
            </transition-view>
    </div>
</template>

<script>
export default {
    name: 'schedule',
    data() {
        return {

        }
    },
    mounted() {
        console.log('schedule');
    }
}
</script>

<style>

</style>