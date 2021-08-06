<template>
	<view class="allGoodsList">
		<!-- 头部信息 -->
		<view class="headInfo">
			<text>———</text>
			<text class="headtitle">看了又看</text>
			<text>———</text>
		</view>
		
	<view class="detail-goods-list" v-if="goodsList">
		
		<view class="goods-item" v-for="(item,index) in goodsList" :key="item.index">
			<!-- 图片 -->
			<view class="img">
				<image :src="item.image" :lazy-load="true" class="good-img"></image>
			</view>
			<!-- 标题 -->
			<view class="title">
				{{item.title}}
			</view>
			<!-- 价格 -->
			<view class="price">
				<text class="monkey">￥</text>
				<text class="monkeyNum">{{item.price}}</text>
				<text class="cfav">{{item.cfav}}人付款</text>
			</view>
		</view>
	</view>
	<!-- that is all -->
	<view class="over">
		<text>that's all~</text>
	</view>
	</view>
</template>

<script>
	export default{
		name:"DetailGoodsList",
		props:{
			goodsList:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.headInfo{
		text-align: center;
		background-color: #eee;
		padding: 38rpx 0;
		color:#ff5777;
	}
	.headtitle{
		font-size: 34rpx;
		padding: 0 8rpx;
	}
	.detail-goods-list{
		display: flex;
		flex-wrap: wrap;
		justify-content:space-evenly;
		background-color: #eee;
	}
	.goods-item{
		
		background-color: #fff;
		margin-bottom: 30rpx;
		border-radius: 10rpx;
		box-shadow: 0 2px 1px rgba(100,100,100,0.08);
	}
	.img,.title,.price{
		width: 350rpx;
	}
	.good-img{
		width: 100%;
		border-radius: 10rpx;
	}
	.title{
	    overflow: hidden;
	    text-overflow: ellipsis; /*这三行代码效果：单行文本溢出显示省略号*/
	    white-space: nowrap;	
		font-size: 30rpx;
		margin-bottom: 30rpx;
	}
	.price{
		margin-bottom: 18rpx;
	}
	.monkey{
		font-size: 20rpx;
	}
	.monkeyNum{
		font-size: 34rpx;
		font-size: 500;
		margin-right: 8rpx;
	}
	.monkey,.monkeyNum{
		color:#ff5777;
	}
	.cfav{
		color:#808080;
		font-size: 20rpx;
	}
	.over{
		padding-top: 20rpx;
		padding-bottom: 120rpx;
		text-align: center;
	}
	.over>text{
		font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		letter-spacing: 5rpx;
	}
</style>
