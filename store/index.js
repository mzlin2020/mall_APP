import Vue from 'vue'
import Vuex from '../node_modules/vuex/dist/vuex.js'

// 使用
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		cartList:[] //保存购物车的数据
	},
	mutations:{
		addCart (state,payload) {
			let sameProduct = null
			for ( let item of state.cartList) {
				if (item.iid == payload.iid) {
					sameProduct = item //说明存在购物车已存在该商品，为sameProduct赋值
				}
			}
			
			if (sameProduct) {
				sameProduct.count+=1
			}else{ 
				payload.count = 1 //若购物车没有该商品，则将其加入，并添加count属性
				state.cartList.push(payload)
			}
		}
	}
})