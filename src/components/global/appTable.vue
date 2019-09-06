<template>
    <el-table :data="tableData" :header-cell-style="headerCellStyle" size="small" style="width: 100%">
        <el-table-column
            v-for="(item, index) in columns"
            :prop="item.prop"
            :label="item.label"
            :key="index">
            <template v-slot="{ row, column, $index }">
                <slot :rowData="{ row, prop: item.prop}"></slot>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: "appTable",
    props: {
        tableData: Array,
        columns: Array,
    },
    methods: {
       headerCellStyle() {
           return {
               background: '#f4f4f4',
                'font-size': '14px',
                color: '#666'
           }
       }
    }
};
</script>
<style lang="stylus" >

</style>