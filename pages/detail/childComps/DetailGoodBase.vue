<template>
	<view class="DetailGoodBase" v-if="baseInfo">
		<!-- 标题 -->
		<view class="title" >
			{{baseInfo.title}}
		</view>
		
		<!-- 价格 -->
		<view class="price">
			<text class="lowNowPrice">￥{{baseInfo.lowNowPrice}}</text>
			<text class="oldPrice" v-if="baseInfo.oldPrice">{{baseInfo.oldPrice}}</text>
			<text class="discountDesc" v-if="baseInfo.discountDesc">{{baseInfo.discountDesc}}</text>
		</view>
		
		<!-- 销量收藏 -->
		<view class="columns">
			<text>{{columns[0]}}</text>
			<text>{{columns[1]}}</text>
			<text>{{columns[2]}}</text>
		</view>
		
		<!-- 无理由退货、发货模块 -->
		<view class="other-info">
			<view class="left-services">
				<image :src="services[1].icon" mode=""></image>
				<text>{{services[1].name}}</text>
			</view>
			<view class="right-services">
				<image :src="services[2].icon" mode=""></image>
				<text>{{services[2].name}}</text>
			</view>

		</view>
	</view>
</template>

<script>
	export default{
		name:"DetailGoodBase",
		props:{
			baseInfo:{
				type:Object,
				default(){
					return {}
				}
			},
			columns:{
				type:Array,
				default(){
					return []
				}
			},
			services:{
				type:Array,
				default(){
					return []
				}
			}
		}
		
	}
</script>

<style scoped>
	.title{
		padding: 15rpx 10rpx;
		font-size: 30rpx;
	}
	/* 价格 */
	.lowNowPrice{
		font-size: 40rpx;
		color: #ff5777;
	}
	.oldPrice{
		text-decoration: line-through; /*定义穿过文本下的一条线*/
		color: #999;
		padding-left: 10rpx;
		font-size: 24rpx;
		
	}
	.discountDesc{
		color: white;
		font-size: 22rpx;
		background-color:#ff5777;
		border-radius: 8rpx;
		padding: 3rpx 8rpx;
		position: relative;
		top: -10rpx;
		margin-left: 10rpx;
	}
	/* 销量收藏 */
	.columns{
		display: flex;
		font-size: 28rpx;
		color: #999;
		margin-top: 20rpx;
		justify-content: space-between;
		padding: 20rpx 5rpx 10rpx 5rpx;
		box-shadow: 0 2px 1px rgba(100,100,100,0.08);
		margin-bottom: 8rpx;
	}
	/* 其他信息 */
	.other-info{
		display: flex;
		justify-content: space-between;
		box-shadow: 0 3px 1px rgba(100,100,100,0.08);
		padding: 10rpx 0;
	}
	.left-services>image,.right-services>image{
		width: 35rpx;
		height: 35rpx;
		vertical-align: middle;
	}
	.left-services>text,.right-services>text{
		font-size: 28rpx;
		color: #555;
		padding: 0 4rpx;
	}
</style>
