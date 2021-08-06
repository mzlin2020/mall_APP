<template>
	<view>
		<!-- #ifdef APP-PLUS || H5 -->
		<!-- 当车中有商品，显示管理商品的nav -->
		<cart-manage-btn v-show=" !isShow"/>
		<view class="cart" v-for="(item,index) in cartInfo" :key="item.index">
			<!-- 按钮 -->
			<view class="radio">
					<check-button @click.native="changeChecked(index)" :isChecked="cartInfo[index].checked"/>
			</view>
			
			<!-- 商品图 -->
			<view class="cart-img">
				<image :src="item.image" mode=""></image>
			</view>
			
			<!-- 商品信息 -->
			<view class="goodsInfo">
				<view class="title">
					{{item.title}}
				</view>
				<view class="desc">
					{{item.desc}}
				</view>
				<view class="price-count">
					<text class="price">￥{{item.price}}</text>
					<text class="count">X{{item.count}}</text>
				</view>

			</view>
		</view>
		<!-- 点击管理按钮，显示管理逐组件 -->
		<cart-manage v-show="isShowManage" /> 
		<cart-bottom-bar />
		<!-- #endif -->
		<cart-nothing v-show="isShow"/>
		<detail-goods-list :goodsList="goodsList" v-show="isShow"/>
	</view>
</template>

<script>
	// 底部汇总
	import CartBottomBar from './childComps/CartBottomBar.vue'
	// 小按钮
	import CheckButton from './childComps/CheckButton.vue'
	// 购物车空无一物
	import CartNothing from './childComps/CartNothing.vue'
	// 导入detail中的商品推荐
	import DetailGoodsList from '../detail/childComps/DetailGoodsList.vue'
	//导入管理按钮
	import CartManageBtn from './childComps/CartManageBtn.vue'
	// 导入管理组件
	import CartManage from './childComps/CartManage.vue'
	export default {
		name:"Cart",
		components:{
			CartBottomBar,
			CheckButton,
			CartNothing,
			DetailGoodsList,
			CartManageBtn,
			CartManage
		},
		data() {
			return {
				cartInfo: this.$store.state.cartList,
				isShow:true ,//控制购物车没有东西时的显示,
				goodsList:null ,//购物车没有商品时展示
				isShowManage:false //决定是否显示管理组件
			}
		},
		methods:{
			changeChecked(index){
				// console.log(this.cartInfo[index].checked)
				this.cartInfo[index].checked = !this.cartInfo[index].checked
			}
			},
		onLoad(){
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
		created() {
			uni.$on("isShowCart",res=>{
				// console.log(res)
				// 将空购物车的组件清空
				this.isShow = res.isShow
			})
			
			uni.$on('isShowManage',res=>{
				this.isShowManage = res
				// console.log(this.isShowManage)
			})
			
			// 删除购物车所有商品后，将isShow改为true,将空购物车的状态显示出来
			uni.$on('changeShow',res=>{
				this.isShow = res
				this.isShowManage = !res
				
			})
		}
	}
</script>

<style scoped>
/* #ifdef APP-PLUS || H5 */
.cart{
	display: flex;
	margin: 25rpx 5rpx;
	padding-bottom: 20rpx;
	box-shadow: 0 2px 1px rgba(100,100,100,0.08);
}
.radio{
	flex: 0.1;
	align-self: center;
	margin-right: 10rpx;
}
.cart-img{
	flex: 0.2;
}
.goodsInfo{
	flex: 0.7;
	width: 69%;
	padding-left: 15rpx;
}
.cart-img>image{
	width: 190rpx;
	height: 264rpx;
	border-radius: 20rpx;
}
.title,.desc{
	overflow: hidden;
	text-overflow: ellipsis; /*这三行代码效果：单行文本溢出显示省略号*/
	white-space: nowrap;
}
.title{
	font-size: 34rpx;
}
.desc{
	margin-top: 40rpx;
	color:#808080;
}
.price-count{
	margin-top: 65rpx;
}
.price{
	font-size: 40rpx;
	color:rgb(255, 93, 18);
	padding-right: 250rpx;
}
.count{
	font-size:34rpx;
}
/* #endif */
</style>
