<template>
    <div class="kpi">
        <p>员工工时统计</p>
        <app-table :tableData="tableData" :columns="columns">
            <template v-slot:default="{rowData}">
                <p>{{rowData.row[rowData.prop] || 0}}</p>
            </template>
        </app-table>
    </div>
</template>

<script>
export default {
    name: "hoursStatistics",
    props: {
        tableData: Array,
        columns: {
            type: Array,
            default: () => {
                return [
                    { prop: "employeeName", label: "姓名" },
                    { prop: "weeklyHours", label: "周累计" },
                    { prop: "weeklyPredictHours", label: "周预排合计" },
                    { prop: "monthlyHours", label: "月累计" },
                    { prop: "monthlyPredictHours", label: "月预排合计" },
                    { prop: "overTime", label: "超工时" }
                ];
            }
        }
    }
};
</script>
<style lang="stylus" scoped></style>