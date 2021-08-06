<template>
	<view class="category-info" v-if="info" >
		
		<view class="goods" v-for="item in info.data.list">
			<view class="item">
				<!--图片 -->
				<image :src="item.image" mode=""></image>
				<!-- 文字 -->
				<view class="text">
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export	default {
		props:{
			info:{
				type:Object,
				default() {
					return {}
				}
			}
		}
		
	}
</script>

<style scoped>
	.category-info{
		width: 70%;
		/* border: 1rpx black solid; */
		margin-left: 30%;
		padding-top: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.goods{
		margin: 20rpx 0;
	}
	.item{
		text-align: center;
		font-size: 30rpx;
		color: #333333;
	}
	.item>image{
		width: 140rpx;
		height: 140rpx;
	}
	
</style>
