<template>
   <p class="page-title">
       <slot>{{title}}</slot>
   </p>
</template>

<script>
export default {
    name: 'pageTitle',
    data() {
        return {
            title: this.$route.meta.title,
        }
    },
    watch: {
        '$route'(route) {
            this.title = route.meta.title;
        }
    }
}
</script>

<style>

</style>