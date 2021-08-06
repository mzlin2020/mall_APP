<template>
	<view class="DetailShop" v-if="shopInfo">
		<!-- 商家logo -->
		<view class="logo">
			<image class="shop-img" :src="shopInfo.shopLogo"></image>
			<text class="shopName">{{shopInfo.name}}</text>
		</view>
		<!-- 商家具体信息 -->
		<view class="all-info" v-if="shopInfo">
			<!-- 总销量 -->
			<view class="sell-count">
				<view class="cSells">{{shopInfo.cSells | sellCountFilter}}</view>
				<view>总销量</view>
			</view>
			
			
			<!-- 全部宝贝 -->
			<view class="all-goods">
				<view class="cGoods">{{shopInfo.cGoods}}</view>
				<view>全部宝贝</view>
			</view>
			
			<!-- 店铺评分 -->
			<view class="shop-score">
				<view class="score-dec" v-for="(item,index) in shopInfo.score" :key="item.index">
					<text class="name">{{item.name}}</text>
					<text :class="{acive:item.isBetter}" class="score-color">{{item.score}}</text>
				</view>
			</view>
			<!-- 评分高低 -->
			<view>
				<view v-for="(item,index) in shopInfo.score" :key="item.inedx" class="show-score">
					<text v-if="item.isBetter" class="hight-score">高</text>
					<text v-else class="low-score">低</text>
				</view>
			</view>
		</view>
		
		<!-- 进店 -->
		<view class="btn">
			<button type="default" size="mini" @click="btnClick">进店逛逛</button>
		</view>
		
	</view>
</template>

<script>
	export default{
		name:"DetailShop",
		props:{
			shopInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		filters:{
			// 转化总量
			sellCountFilter (value) {
				if (value < 10000) return value
				return (value / 10000).toFixed(1) + "万"
			}
		},
		methods:{
			btnClick(){
				uni.showToast({
					title:"敬请期待",
					icon:"none"
				})
			}
		}
		
	}
</script>

<style scoped>
	.logo{
		margin: 30rpx 20rpx;
	}
	.shop-img{
		width: 105rpx;
		height: 105rpx;
		border-radius: 50%;
		border: 3rpx solid rgb(228, 220, 220);
		vertical-align: middle;  /* 使图片置于中间位置*/
		margin-right: 30rpx;
	}
	/* 商家具体信息 */
	.all-info{
		display: flex;
		justify-content: space-around;
	}
	.sell-count,.all-goods{
		text-align: center;
	}
	.cSells,.cGoods{
		margin: 10rpx 0 20rpx 0;
	}
	.score-dec{
		margin-bottom: 8rpx;
	}
	.score-dec>text{
		display: inline-block;
	}
	.score-dec>.name{
		margin-right: 15rpx;
	}
	.show-score{
		margin-bottom: 8rpx;
	}
	.low-score{
		color: white;
		background-color: yellowgreen;
		padding: 3rpx;
	}
	.hight-score{
		color: white;
		background-color:#ff8198;
		padding: 3rpx;
	}
	.score-color{
		color: yellowgreen;
	}
	.acive{
		color:#ff8198;
	}
	.btn{
		margin-top: 30rpx;
		text-align: center;
		padding-bottom: 30rpx;
		box-shadow: 0 5px 3px rgba(100,100,100,0.08);
	}
</style>
