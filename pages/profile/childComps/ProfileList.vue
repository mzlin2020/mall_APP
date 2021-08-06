<template>
	<view class="profile-list">
		<view class="list-item" v-for="(item,index) in otherInfo" :key="item.index">
			<image :src="item.img" mode=""></image>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		name:"ProfileList",
		data(){
			return{
				otherInfo:[
					{'title':"我的消息","img":"../../../static/profile/profile-user.png"},
					{'title':"积分商城","img":"../../../static/profile/profile-integral.png"},
					{'title':"会员卡","img":"../../../static/profile/profile-vip.png"},
					{'title':"点赞购物APP","img":"../../../static/profile/profile-good.png"},
				],
				// #ifdef H5 || APP-PLUS
				otherInfo:[
					{'title':"我的消息","img":"../../static/profile/profile-user.png"},
					{'title':"积分商城","img":"../../static/profile/profile-integral.png"},
					{'title':"会员卡","img":"../../static/profile/profile-vip.png"},
					{'title':"点赞购物APP","img":"../../static/profile/profile-good.png"},
				],
				//  #endif
			}
		}
	}
</script>

<style scoped>
	.profile-list{
		margin: 40rpx 0 0 30rpx;
	}
	.list-item{
		padding-bottom: 20rpx;
		margin-bottom: 20rpx;
		box-shadow: 0 4rpx 2rpx rgba(100,100,100,0.1);
	}
	.list-item>image{
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
		margin-right: 20rpx;
	}
	.list-item>text{
		color: #333333;
	}
</style>
