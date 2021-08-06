<template>
	<view class="profile-assets">
		<view class="assets-item" v-for="(item,index) in userAssets" :key="item.index">
			<view class="count">
				<text class="item-count">{{item.count}}</text>
				<text>{{item.init}}</text>
			</view>
			<view class="desc">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"ProfileAssets",
		data(){
			return{
				userAssets:[
					// 余额
					{title:"我的余额",count:"0.00",init:"元"},
					// 优惠
					{title:"我的优惠",count:0,init:"个"},
					// 积分
					{title:"我的积分",count:0,init:"分"}
				]
			}
		}
	}
</script>

<style scoped>
	.profile-assets{
		display: flex;
		justify-content: space-around;	
		text-align: center;
		padding: 40rpx 0;
		box-shadow: 0 14rpx 2rpx rgba(100,100,100,0.1);
	}
	.item-count{
		color:#ff5777;
		padding: 0 4rpx 5rpx 4rpx;
		
	}
</style>
