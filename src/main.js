import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
Vue.config.productionTip = false
Vue.prototype.$http = axios;
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})