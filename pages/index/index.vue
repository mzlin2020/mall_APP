<template>
	<view id="index">
		
		<Swiper></Swiper>
		<Recommend></Recommend>
		<feature-view></feature-view>
		<tab-control @getIndex="getIndex"></tab-control>
		<goods-list :goodsInfo="goods[currentType].list" @GoodIndex="getGoodIndex"></goods-list>
		<back-top @click.native="backTop" v-show="isShowBackTop" />
	</view>
</template>

<script>
	// 轮播图
	import Swiper from "../../components/Swiper.vue"
	// 推荐
	import Recommend from './childComps/Recommend.vue'
	// 本周流行
	import FeatureView from './childComps/FeatureView.vue'
	// 商品展示选项卡
	import TabControl from '../../components/TabControl.vue'
	// 导入商品展示组件
	import GoodsList from '../../components/GoodsList.vue'
	// 返回顶部的组件
	import BackTop from '../../components/BackTop.vue'
	
	export default {
		name:"index",
		components:{
			Swiper,
			Recommend,
			FeatureView,
			TabControl,
			GoodsList,
			BackTop
		},
		data(){
			return{
				goods:{ //保存商品信息
					pop:{page:0,list:[]},
					new:{page:0,list:[]},
					sell:{page:0,list:[]},
				},
				currentType:'pop' ,//当前显示的类型
				isShowBackTop:false //是否显示返回顶部的组件
			}
		},
		created(){
			// console.log("页面创建时加载")
			// 页面创建时加载三种类型的商品展示的数据
			this.getGoodsInfo("pop")
			this.getGoodsInfo("new")
			this.getGoodsInfo("sell")
		},
		methods:{
			getGoodsInfo(type){
				let page = this.goods[type].page +1 ;
				this.$request({
					url:'/home/data',
					data:{
						type:type,
						page:page
					}
				}).then(res=>{
					// console.log(res.data.data.list)
					// 获取到的数据保存到goods中
					this.goods[type].list.push(...res.data.data.list)
					this.goods[type].page += 1
				})
			},
			// 通过该函数动态决定currentType的值
			getIndex(index){
				switch(index){
					case 0 :
					this.currentType = "pop"
					break;
					case 1 :
					this.currentType = "new"
					break;
					case 2 :
					this.currentType = "sell"
					break
				}
			
			},
			// 监听上拉加载更多（页面触底事件）使用scroll-view时，失效
			onReachBottom(){
				// console.log("触底了")
				//再次触发该函数，page+1，往goods的list增加新的商品数据，并会被传递向GoodsList组件
				this.getGoodsInfo(this.currentType)
			},
			getGoodIndex(index){
				// 根据index获取对应商品的iid
				// console.log(this.goods[this.currentType].list[index].iid)
				const iid = this.goods[this.currentType].list[index].iid
				uni.navigateTo({
					url:"../detail/Detail?iid="+iid
				})
			},
			
			// 返回顶部
			backTop(){
				// console.log("返回顶部")
				scrollTo(0,0)
			}
		},
		// 该事件可以监听页面的滚动，scrollTop
		onPageScroll: function(e){
			// scrollTop属性可以获取页面在垂直方向已滚动的距离
			if(e.scrollTop > 2000){
				this.isShowBackTop = true
			}else{
				this.isShowBackTop = false
			}
			// console.log("滚动距离"+e.scrollTop)
		}
	}
</script>

<style>

</style>
