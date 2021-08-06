import Vue from 'vue'
import App from './App'
import store from './store/index.js' //导入vuex
import {request} from "network/request.js"



// 添加至原型
Vue.prototype.$request = request




Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
