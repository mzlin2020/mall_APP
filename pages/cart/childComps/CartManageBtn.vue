<template>
	<view class="manage-btn">
	<!-- #ifdef APP-PLUS|| H5 -->
	<text>共{{$store.state.cartList.length}}件商品</text>
	<!-- #endif -->
	<!-- #ifdef MP-WEIXIN -->
	<text>共0件商品</text>
	<!-- #endif -->
	<text class="btn" @click="changeInfo">{{showInfo}}</text>
	</view>
</template>

<script>
	export default{
		name:"CartManageBtn",
		data(){
			return{
				showInfo:"管理",
				isShowManageText:false //false显示管理，true显示完成
			}
		},
		methods:{
			changeInfo(){
				this.isShowManageText = ! this.isShowManageText
				
				// 将控制管理组件的显示属性传递出去
				uni.$emit('isShowManage',this.isShowManageText)
				
				if(this.isShowManageText){
					this.showInfo = "完成"
				}else{
					this.showInfo = "管理"
				}
			}
		}
	}
</script>

<style scoped>
	.manage-btn{
		display: flex;
		justify-content: space-between;
		background-color: #eee;
		color: #333;
		padding: 15rpx 10rpx;
	}
</style>
