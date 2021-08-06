<template>
	<scroll-view class="categoryName" scroll-y="true">
		<view v-for="(item,index) in categoryName" 
			 :key="item.index" 
			 class="name-item"
			 @click="btnClick(index)"
			 :class="{active:currentIndex===index}">
			{{item.title}}
		</view>
	</scroll-view>

</template>

<script>
	export default{
		props:{
			categoryName:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentIndex:0	
			}
		},
		methods:{
			btnClick(index){
				this.currentIndex = index;
				
				const maitKey = this.categoryName[index].maitKey
				
				// // console.log(this.categoryName[index].maitKey)
				// // 将被点击的maitKey发送给父组件
				this.$emit('getMaitKey',maitKey)
			}
		}
		
	}	
</script>

<style scoped>
	.categoryName{
		position: fixed;	
		overflow: hidden;
		width: 30%;
		left: 0;
		top: 88rpx;
		bottom: 100rpx;
		text-align: center;
		background-color:#F6F6F6;
		color: #333333;	
	}
	.name-item{
		padding: 25rpx 0;
	}
	.active{
		color: #FF8198;
		background-color:#FFFFFF;
		border-left: 8rpx #FF5777 solid;
		font-weight: 600;
	}
</style>
