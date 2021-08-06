<template>
	<view class="bottom-bar">
		<!-- 客服 -->
		<view class="service">
			<view class="service-img">
			<image src="../../../static/detail/service.png" mode=""></image>
			</view>
			<text>客服</text>
		</view>
		
		<!-- 店铺 -->
		<view class="store">
			<view class="store-img">
			<image src="../../../static/detail/store.png" mode=""></image>
			</view>
			<text>店铺</text>
		</view>
		
		<!-- 收藏-->
		<view class="collect">
			<view class="collect-img">
			<image src="../../../static/detail/collect.png" mode=""></image>
			</view>
			<text>收藏</text>
		</view>
		
		<!-- 加入购物车 -->
		<view class="addCart" @click="addCart">
			<text>加入购物车</text>
		</view>
		
		<!-- 购买 -->
		<view class="purchase">
			<text>购买</text>
		</view>
	</view>
</template>

<script>
	export default{
		name:'DetailBottomBar',
		data(){
			return{
				num:10
			}
		},
		methods:{
			addCart(){
				
				// 点击即清空购物车原有的组件
				uni.$emit("isShowCart",{isShow:false})
				
				// 将点击事件发送出去
				this.$emit('addCart')
				
				// 弹窗信息
				uni.showToast({
					title:"加入购物车成功",
					icon:"none"
				})
			}
		}
	}
</script>

<style scoped>
	.bottom-bar{
		display: flex;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		background: #fff;
		text-align:center;
	}
	.service,.store,.collect{
		flex-grow: 1;
	}
	.addCart{
		flex-grow: 1.5;
	}
	.purchase{
		flex-grow: 1.2;
	}
	.service-img>image,.store-img>image,.collect-img>image{
		width: 52rpx;
		height: 52rpx;
	}
	.service-img,.store-img,.collect-img{
		height: 52rpx
	}
	.service>text,.store>text,.collect>text{
		font-size: 28rpx;
	}
	.addCart{
		background-color:#FFE003;
		/* 垂直居中对齐 */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 36rpx;
	}
	.purchase{
		background-color: #FF779A;
		color:white;
		/* 垂直居中对齐 */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 36rpx;
	}
</style>
