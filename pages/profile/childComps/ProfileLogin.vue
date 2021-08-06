<template>
	<view class="profile-login">
		<!-- 图片 -->
		<view class="login-img">
			<image src="../../../static/profile/user.png" mode=""></image>
		</view>
		
		<!-- 登录状态 -->
		<view class="user-info">
			<text class="login-text">登录 / 注册</text>
			<view class="phone">
				<image src="../../../static/profile/phone.png" mode=""></image>
				<text>暂未绑定手机号</text>
			</view>
		</view>
		
		<!-- 箭头 -->
		<view class="arrow">
			<image src="../../../static/profile/arrow_right.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:"ProfileLogin"
	}
</script>

<style scoped>
	.profile-login{
		display: flex;
		background-color:#ff8198;
		color: #fff;
		align-items: center;
		padding: 20rpx 0;
	}
	.login-img{
		border-radius: 50%;	
		margin-left: 20rpx;
	}
	.user-info{
		margin-left: 40rpx;
	}
	.login-text{
		font-size: 34rpx;
	}
	.phone{
		margin-top: 10rpx;
	}
	.arrow{
		margin-left: 200rpx;
	}
	.login-img>image{
		width: 150rpx;
		height: 150rpx;
	}
	.phone>image{
		width: 30rpx;
		height: 30rpx;
		vertical-align: middle;
		padding-right: 5rpx;
	}
	.arrow>image{
		width: 40rpx;
		height: 40rpx;
	}
</style>
