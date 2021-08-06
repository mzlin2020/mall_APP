<template>
	<view class="cart-nothing">
		<view class="nothing">
			<image src="../../../static/cart/nothing.png" mode=""></image>
			<view class="text">
				购物车还是空的哦~
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"CartNothing"
	}
</script>

<style scoped>
	.nothing{
		text-align: center;
	}
	.nothing>image{
		width: 350rpx;
		height: 350rpx;
	}
	.text{
		color: #222;
		margin-bottom: 20rpx;
		color: #888;
	}
</style>
