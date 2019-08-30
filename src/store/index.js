import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import UserInfo from '@/service/userInfo.js'

const store = new Vuex.Store({
    state: {
        activeMenu: '',
        routerAnimation: {
            name: 'content',
            mode: 'out-in'
        },
        userInfo: null,
        isAdmin: null
    },
    getters: {
       
    },
    mutations: {
        saveUserInfo(state, payload) {
            state.userInfo = payload;
        },
        setIsAdmin(state) {
            state.isAdmin = state.userInfo.type === 'ADMIN'
        },
        setActiveMenu(state, payload) {
            state.activeMenu = payload;
        }
    },

    actions: {
        saveUserInfo({commit}, payload) {
            commit('saveUserInfo', payload);
            commit('setIsAdmin');
        },
        async getUserInfo({dispatch}) {
            let result = await  UserInfo.getUserInfo()
            dispatch('saveUserInfo', result.data)
        }
    }
})

export default store