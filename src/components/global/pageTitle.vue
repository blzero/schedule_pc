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
            title: ''
        }
    },
    watch: {
        '$route'(route) {
            this.title = route.meta.title;
            console.log(route);
        }
    }
}
</script>

<style>

</style>