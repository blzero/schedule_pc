<template>
    <el-select
        :value="value"
        :multiple="multiple"
        filterable
        clearable
        remote
        :placeholder="placeholder"
        :remote-method="remoteMethod"
        :loading="loading"
        @change="onSelect"
        @clear="onClear"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <el-option
            v-for="item in options"
            :key="item[optionProp.keyProp]"
            :label="item[optionProp.labelProp]"
            :value="item[optionProp.valueProp]"
        ></el-option>
    </el-select>
</template>

<script>
export default {
    name: 'appSelect',
    props: {
        currentSelected: {
            type: Object,
            default: () => {
                return {
                    [this.optionProp.valueProp]: ''
                }
            }
        },
        placeholder: {
            type: String,
            default: '请选择门店'
        },
        loading: Boolean,
        options: Array,
        clearable: Boolean,
        optionProp: {
            type: Object,
            default: () => {
                return {
                    keyProp: 'id',
                    labelProp: 'storeName',
                    valueProp: 'id'
                }
            }
        },
        multiple: {
            type: Boolean,
            default: false
        },
        
    },
    data() {
        return {
        }
    },
    computed: {
        value() {
            return this.currentSelected && this.currentSelected[this.optionProp.valueProp];   
        }
    },
    mounted() {
    },
    methods: {
        remoteMethod(searchKey) {
            if (searchKey) {
                this.$emit('searchMethod', searchKey);
            }
        },
        onSelect(value) {
            let current = this.options.find(item => item.id === value);
            this.$emit('onSelect', current);
        },
        onClear() {
            this.$emit('onSelect', null);
        }
    }
};
</script>

<style>
</style>