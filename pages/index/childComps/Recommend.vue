<template>
	<view class="recommend">
		<view class="recommend-item" v-for="item in recommendInfo" :key="item.index">
			<image :src="item.image" mode="" class="recommendImg"></image>
			<view class="text">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"Recommend",
		data() {
			return {
				recommendInfo: null
			}
		},
		created() {
			this.getRecommendInfo()
		},
		methods:{
			getRecommendInfo () {
				this.$request({
					url:"/home/multidata"
				}).then(res=>{
					// console.log(res.data.data.recommend.list)
					this.recommendInfo = res.data.data.recommend.list
				})
			}
		}
	}
</script>

<style scoped>
	.recommend{
		display: flex;
		flex: 20%;
		justify-content: space-around;	
		text-align: center;
		margin-top: 34rpx;
		/* 解决微信小程序的swiper挡住recomend */
		/* #ifdef MP-WEIXIN */
		margin-top: 100rpx;
		/* #endif */
		font-size: 32rpx;
		color: #666;
	}
	.recommend-item{
		width: 170rpx;
		height: 170rpx;
	}
	.recommendImg{
		width: 100%;
		height: 100%;
	}
	.text{
		padding: 10rpx 0;
	}	
</style>
