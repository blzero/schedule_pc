<template>
    <div class="home">
        <page-title>
            <template #other>
                <span class="date">{{date}}</span>
            </template>
            <template #right>
                <span>所属门店:</span>
                <app-select
                    @searchMethod="getStoreList"
                    @onSelect="changeStore"
                    :currentSelected="currentStore"
                    :options="storeList"
                    :loading="searchIng"
                ></app-select>
                <el-button type="primary" @click="search" :disabled="!currentStore" >搜索</el-button>
            </template>
        </page-title>

        <div class="home-content">
            <el-row>
                <el-col :span="12">
                    <div class="left-content">
                        <home-kpi :tableData="kpiData"></home-kpi>
                        <hours-statistics :tableData="hourData"></hours-statistics>
                    </div>
                </el-col>
                <el-col :span="12">right</el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import homeService from "@/service/home.js";
import homeKpi from "./components/kpi";
import hoursStatistics from "./components/hoursStatistics";
import {from} from 'rxjs'
import { map, combineAll} from 'rxjs/operators'
export default {
    name: "home",
    data() {
        return {
            date: moment().format("YYYY-MM-DD"),
            storeList: [],
            currentStore: {},
            searchIng: false,
            kpiData: [],
            hourData: []
        };
    },
    components: {
        homeKpi,
        hoursStatistics
    },
    async mounted() {
        await this.getStoreList();
        this.search();
    },
    computed: {
        query() {
            if (this.currentStore) {
                return {
                    storeId: this.currentStore.id,
                    storeName: this.currentStore.storeName
                };
            }
            return {}
        }
    },
    methods: {
        changeStore(store) {
            this.currentStore = store;
        },
       async getStoreList(name = "") {
            this.searchIng = true;
            await homeService
                .getStoreList({
                    query: {
                        storeName: name,
                        pageSize: 50
                    }
                })
                .then(res => {
                    this.storeList = res.list;
                    this.searchIng = false;
                    this.currentStore = this.storeList[0];
                });
        },
        getEmployeeHour() {
           return from(homeService.getEmployeeHour({ query: this.query }))
        //    .then(res => {
        //         this.hourData = res;
        //         console.log("getEmployeeHour", res);
        //     });
        },
        getFullTime() {
           return from(homeService.getFullTime({ query: this.query }))
        //    .then(res => {
        //         console.log("getFullTime", res);
        //     });
        },
        getTurnover() {
           return from(homeService.getTurnover({ query: this.query }))
        //    .then(res => {
        //         console.log("getTurnover", res);
        //     });
        },
        getAbnormal() {
           return from(homeService.getAbnormal({ query: this.query }))
        //    .then(res => {
        //         console.log("getAbnormal", res);
        //     });
        },
        search() {
            console.log("search");
           
            let arr = from([this.getEmployeeHour(),this.getFullTime(), this.getTurnover(), this.getAbnormal()])
            arr.pipe(map(itme => itme), combineAll()).subscribe(res => {
                this.hourData = res[0];
                console.log(res);
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
.home {
    width: 100%;
    height: 100%;

    .date {
        margin: 0 15px;
        font-size: 14px;
        font-weight: bold;
    }
}
</style>