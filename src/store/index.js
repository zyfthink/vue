import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    loading: true,
    isLoad: false
}

const actions = { //接收组件中的状态并响应
    success: ({ commit }) => { //请求成功
        commit('suc')
    },
    error: ({ commit }) => { //失败
        commit('err')
    }


}
const mutations = {
    suc(state) { //成功
        state.isLoad = true //设置该组件显示
        state.loading = false //加载中隐藏
    },
    err(state) { //失败
        state.isLoad = false //设置该组件隐藏
        state.loading = true //加载中显示
    }

}


const getters = {
    isLoad(state) {
        return state.isLoad
    },
    loading(state) {
        return state.loading
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})