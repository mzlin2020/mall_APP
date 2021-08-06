<template>
	<view class="CartBottomBar">
		<!-- 全选 -->
		<view class="choice">
			<check-button @click.native="chooseAll" :isChecked="isSelectAll"/>
			<text>全选</text>
		</view>
		
		<!-- 合计 -->
		<view class="addALL">
			<text>
				<!-- #ifdef APP-PLUS || H5 -->
				合计:￥{{totalPrice}}
				<!-- #endif -->
			</text>
		</view>
		
		<!-- 去结算 -->
		<view class="purchase" @click="goPurchase">
			去结算
			<!-- #ifdef APP-PLUS || H5 -->
			({{purchase}})
			<!-- #endif -->
		</view>
			
	</view>
</template>

<script>
	import CheckButton from './CheckButton.vue'
	export default{
		name:'CartBottomBar',
		components:{
			CheckButton
		},
		data(){
				return{
					cartList:this.$store.state.cartList,
					isChecked:false //全选按钮状态
					
				}
		},
		computed:{
			// 去结算：返回cartList中item的checked=true的个数
			purchase(){
				let num = 0
				for(let item of this.cartList){
					if(item.checked == true){
						num++
					}
				}
				return num
				},
			totalPrice(){
				let total = 0
				for(let item of this.cartList){
					if(item.checked == true){
						total = total+item.count*item.price
					}
				}
				return total.toFixed(2)
			},
			isSelectAll(){
				if(this.cartList.length === 0){ //如果购物车为空
					return false
				}
				for(let item of this.cartList){ //若不为空，当购物车中有一个不选中时，同样返回false
					if(!item.checked){
						return false 
					}
				}
				return true
			}
		},
		methods:{
			chooseAll(){
				if(this.isSelectAll){ //点击该按钮，将购物车所有checked改成false
					this.cartList.forEach(item=>item.checked = false)
				}else{ //点击该按钮，将购物车所有checked改成true
					this.cartList.forEach(item=>item.checked = true)
				}
			},
			// 去结算
			goPurchase(){
				uni.showToast({
					title:"正在努力开发哦",
					icon:"none"
				})
			}
			
		},
		
	}
</script>

<style scoped>
	.CartBottomBar{
		display: flex;
		justify-content: space-between;
		background-color: #eee;
		width: 750rpx;
		height: 80rpx;
		align-items: center;
		position: fixed;
		z-index: 99;
		bottom: 0;
		/* #ifdef H5 */
		bottom:50px;
		/* #endif */
		right: 0;
		left: 0;
	}
	.choice,.addALL{
		font-size: 32rpx;
	}
	.choice{
		padding-left: 10rpx;
		display: flex;
	}
	.choice>text{
		padding-left: 10rpx;
	}
	.purchase{
		background-color:#FF779A;
		color: #fff;
		width: 180rpx;
		height: 80rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
