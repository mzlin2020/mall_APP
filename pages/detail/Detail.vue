<template>
	<view class="detail">
		
		<detail-swiper :swiperInfo="swiperInfo" />
		<detail-good-base :baseInfo="baseInfo" :columns="columns" :services="services" />
		<detail-shop :shopInfo="shopInfo"/>
		<detail-comment :commentInfo="commentInfo" :commentNum="cRate"/>
		<detail-goods-info :detailImg="detailImg"/>
		<detail-goods-list :goodsList="goodsList"/>
		<detail-bottom-bar @addCart="addCart"/>
		<back-top @click.native="backTop" v-show="isShowBackTop" />
		
	</view>
</template>

<script>
	// 导入轮播图的组件
	import DetailSwiper from './childComps/DetailSwiper.vue'
	// 导入商品基本信息
	import DetailGoodBase from './childComps/DetailGoodBase.vue'
	// 导入商家信息
	import DetailShop from './childComps/DetailShop.vue'
	// 商品详细图片信息
	import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
	// 用户品评论
	import DetailComment from './childComps/DetailComment.vue'
	// 商品展示
	import DetailGoodsList from './childComps/DetailGoodsList.vue'
	// 底部商品导航
	import DetailBottomBar from './childComps/DetailBottomBar.vue'
	// 返回顶部
	import BackTop from '../../components/BackTop.vue'
	
	export default {
		name:"Detail",
		components:{
			DetailSwiper,
			DetailGoodBase,
			DetailShop,
			DetailGoodsInfo,
			DetailComment,
			DetailGoodsList,
			DetailBottomBar,
			BackTop
		},
		data() {
			return {
				swiperInfo:null, //轮播图数据
				baseInfo:null, //基本信息
				columns:null, //基本信息
				services:null, //基本信息
				shopInfo:null ,//商家信息
				detailImg:null,//商品详情图
				commentInfo:null ,//用户评论
				cRate:null ,//评论数
				goodsList:null ,//商品展示
				isShowBackTop:false //是否显示返回顶部的组件
			}
		},
		onLoad(options) {
			//因为传过来的options是一个对象
			// console.log(options)
			uni.request({
				url:'http://152.136.185.210:7878/api/m5/Detail?iid='+options.iid
			}).then(res=>{
				// console.log(res[1].data.result)
				const result = res[1].data.result
				
				// 轮播图信息
				this.swiperInfo = result.itemInfo.topImages 
				// 基本信息
				this.baseInfo = result.itemInfo
				this.columns = result.columns
				this.services = result.shopInfo.services
				// 商家信息
				this.shopInfo = result.shopInfo
				// 商品数据图
				this.detailImg = result.detailInfo
				// 评论信息
				if(result.rate.cRate !== 0){ //有的是空的
					this.commentInfo = result.rate.list[0]
				}
				this.cRate = result.rate.cRate
			})
			
			// 发送商品展示的网络请求
			uni.request({
				url:"http://152.136.185.210:7878/api/m5/recommend",
				success: (res) => {
					// console.log(res.data.data.list)
					this.goodsList = res.data.data.list
				},
				fail: (err) => {
					uni.showToast({
						title:"商品展示数据请求失败"
					})
				}
			})
		},
		methods:{
			addCart(){
				console.log("加入购车成功")
				
				// 将需要展示在购物车中的数据封装成一个对象
				const product = {}
				product.image = this.swiperInfo[0] //图片
				product.title = this.baseInfo.title //标题
				product.desc = this.baseInfo.desc //描述
				product.price = this.baseInfo.lowNowPrice //实际价格
				product.iid = this.baseInfo.iid
				product.checked = false //false表示商品处于未选中状态
				
				// #ifdef APP-PLUS
				this.$store.commit('addCart',product)
				// #endif
				
				// #ifdef H5
				this.$store.commit('addCart',product)
				// #endif
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

<style scoped>
</style>
