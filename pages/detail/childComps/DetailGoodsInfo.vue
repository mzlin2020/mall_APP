<template>
	<view class="DetailGoodsInfo" v-if="detailImg">
		<!-- 头部信息 -->
		<view class="head">
			<text>商品详情 </text>
		</view>
		<!-- 文字描述 -->
		<view class="desc">
			<view class="left-line"></view>
			
			<view class="content">
				{{detailImg.desc}}
			</view>
			
			<view class="right-line"></view>
		</view>
		
		<!-- 图片 -->
		<view class="showImg" v-for="(item,index) in detailImg.detailImage[0].list" :key="item.index">
			<image :src="item" mode="widthFix" :lazy-load="true"></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:"DetailGoodsInfo",
		props:{
			detailImg:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.head>text{
		font-size: 30rpx;
		color: #fff;
		background-color:#ff8198;
		margin-left: 10rpx;
	}
	.showImg>image{
		width: 750rpx;
	}
	.desc{
		margin-top: 10rpx;
		text-align: justify;
	}
	.content{
		font-size: 26rpx;
		margin: 20rpx;
	}
	.left-line,.right-line{
		width: 150rpx;
		height: 4rpx;
		
	}
	.left-line{
		background-image: linear-gradient(to right, #ff5777, #ff8198);
	}
	.right-line{
		float: right;
		margin-bottom: 20rpx;
		background-image: linear-gradient(to right, #ff8198 , #ff5777);
	}
</style>
