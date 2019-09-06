<template>
    <div class="kpi">
        <p>KPI</p>
        <app-table :tableData="tableData" :columns="columns"></app-table>
    </div>
</template>

<script>
export default {
    name: "homeKpi",
    props: {
        tableData: Array,
        columns: {
            type: Array,
            default: () => {
                return [
                    { prop: "", label: "KPI" },
                    { prop: "", label: "周累计" },
                    { prop: "", label: "月累计" },
                    { prop: "", label: "说明" }
                ];
            }
        }
    },
    data() {
        return {
        };
    }
};
</script>
<style lang="stylus" scoped></style>