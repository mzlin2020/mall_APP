<template>
	<view class="goods-list">
		<view class="goods-item" v-for="(item,index) in goodsInfo" :key="item.index" @click="getIGoodIndex(index)">
			<!-- 图片 -->
			<view class="img">
				<image :src="item.show.img" mode="" class="good-img"></image>
			</view>
			<!-- 标题 -->
			<view class="title">
				{{item.title}}
			</view>
			<!-- 价格与收藏-->
			<view class="descripe">
				<text class="price">￥{{item.price}}</text>
				<view class="collect">
					<image src="../static/home/collect.png" mode="" class="collect-img"></image>
					<text class="collect-text">{{item.cfav}}</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"GoodsList",
		props:{
			goodsInfo:{ //接收index页面传来的数据
				type:Array,
				default(){
					return []
				}
			}
		},	
		data(){
			return{
			}
		},
		methods:{
			getIGoodIndex(index){
				this.$emit("GoodIndex",index)
			}
		}
		
	}
</script>

<style scoped>
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		justify-content:space-evenly;
	}
	.goods-item{
		margin-bottom: 30rpx;
		text-align: center;
	}
	.img,.title,.descripe{
		width: 350rpx;
	}
	.title{
        overflow: hidden;
        text-overflow: ellipsis; /*这三行代码效果：单行文本溢出显示省略号*/
        white-space: nowrap;
		font-size: 30rpx;
	}
	.descripe{
		color:#ff5777;
	}
	.good-img{
		width: 100%;
		border-radius: 3%;
	}
	.collect{
		display: inline;
		padding-left: 30rpx;
	}
	.collect-img{
		width: 25rpx;
		height: 25rpx;
		padding-right: 10rpx;
	}
	.collect-text{
		color: #666666;
	}
</style>
