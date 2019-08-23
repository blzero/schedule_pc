<template>
   <header class="z-header">
       <div class="logon">
           logo
       </div>

       <slot></slot>
       <div class="user-info">
           user
       </div>
   </header>
</template>

<script>
export default {
    name: 'zHeader',
    data() {
        return {

        }
    }
}
</script>
<style lang="stylus" scoped>
    .z-header {
        height 64px;
        display  flex;
        align-items center;
        justify-content space-between;
        background #5189e3;
    }
</style>