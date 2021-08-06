<template>
	<view class="manage">
		<view class="choiceBtn">
			<check-button @click.native="chooseAll" :isChecked="isSelectAll"/>
		</view>
		
		<view class="choicetext">
			<text>全选</text>
		</view>
		
		<view class="deleteGoods">
			<button size="mini" @click="deleteBtn()">删除</button>
		</view>
		
	</view>
	
</template>

<script>
	// 导入全选按钮
	import CheckButton from './CheckButton.vue'
	export default{
		name:"CartManage",
		components:{
			CheckButton
		},
		data(){
			return{
					cartList:this.$store.state.cartList,
			}
		},
		methods:{
			deleteBtn(){
				// isChooseAll购物车的所有商品都被选中：true，否则为false
				let isChooseAll = this.$store.state.cartList.every(res=>{
					return res.checked == true
				})
				// 删除全部的商品的数量
				let length = this.cartList.length
				// console.log(isChooseAll)
				// 如果商品的checked显示选中状态，删除该商品
				for(let index in this.cartList) {
					if (this.cartList[index].checked == true && !isChooseAll) {
						// 删除对应的商品
						this.$store.state.cartList.splice(index,1)
					}else if(isChooseAll){ //所有商品都被选中，删除所有
						this.$store.state.cartList.splice(0,length)
						
						uni.$emit('changeShow',true)
					}
				}
				// 弹出提示
				uni.showToast({
					title:"删除成功",
					icon:"none",
					duration:800
				})
			},
			chooseAll(){
				if(this.isSelectAll){ //点击该按钮，将购物车所有checked改成false
					this.cartList.forEach(item=>item.checked = false)
				}else{ //点击该按钮，将购物车所有checked改成true
					this.cartList.forEach(item=>item.checked = true)
				}
			},
		},
		computed:{
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
	}
</script>

<style scoped>
	.manage{
		display: flex;
		background-color: #eee;
		align-items: center;
		padding: 0rpx 10rpx;
		width: 750rpx;
		height: 80rpx;
		position: fixed;
		z-index: 100;
		bottom: 0;
		/* #ifdef H5 */
		bottom:50px;
		/* #endif */
		right: 0;
		left: 0;
	}
	.choicetext>text{
		margin-left: 10rpx;
	}
	.deleteGoods{
		margin-left: 500rpx;
	}
</style>
