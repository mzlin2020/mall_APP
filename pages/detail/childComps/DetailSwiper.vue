<template>
	<view class="detail-swiper">
	<view class="showSwiper">
			
		<swiper :indicator-dots="true" :autoplay="true" 
		:interval="3000" :duration="1000" class="swiper"
		:circular="true">
		
			<swiper-item v-for="(item,index) in swiperInfo" :key="item.index">
				<image :src="item" mode="" class="swiper-img"></image>
			</swiper-item>
			
		</swiper>
	</view>
	</view>
</template>

<script>
	export default{
		name:"DetailSwiper",
		props:{
			swiperInfo:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.swiper{
		height: 1000rpx;
		width: 750rpx;
	}
	.swiper-img{
		width: 100%;
		height: 100%;
	}
	.showSwiper{
		height: 550rpx;
		width: 100%;
		overflow: hidden;
	}
</style>
