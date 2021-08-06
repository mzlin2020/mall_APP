<template>
	<view>
		<swiper class="swiper" indicator-dots autoplay :interval="3500" :duration="1000" circular="true" >
			<swiper-item v-for="item in swiperInfo" :key="item.index" class="swiper-item">
					<image :src="item.image" mode="" class="swiper-img"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				swiperInfo:{}
			}
		},
		created() {
			// console.log("发送网络请求")
			// 页面创建时，调用发送网络请求的方法
			this.getSwiperInfo()
		},
		methods:{
			// 获取轮播图的数据
			getSwiperInfo(){
				this.$request({
					url:"/home/multidata"
				}).then(res=>{
					// console.log(res.data.data.banner.list)
					this.swiperInfo = res.data.data.banner.list
				})
			}
		}
	}
</script>

<style scoped>
.swiper{
	width: 750rpx;
	height: 380rpx;
}
.swiper-item{
	width: 750rpx;
	height: 380rpx;
}
.swiper-img{
	width: 100%;
	height: 100%;
}
</style>
