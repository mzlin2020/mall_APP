<template>
	<view class="check-button" :class="{active:isChecked}">
		<image src="../../../static/common/checkButton.png" mode=""></image>
	</view>
</template>

<script>
	export default{
		name:"CheckButton",
		props:{
			isChecked:{
				type:Boolean
			}
		}
	}
</script>

<style scoped>
	.check-button{
	    border-radius: 50%;
	    border: 1rpx #bbb solid;
	}
	.active{
	    border: rpx #ff8198 solid;
	    background-color: #ff8198;
	}
	.check-button image{
	    width: 32rpx;
	    height: 32rpx;
	}
</style>
