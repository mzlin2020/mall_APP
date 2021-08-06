<template>
	<view class="tab-control">
		<view class="tab-control-item" 
		v-for="(item,index) in title" 
		:key="item.index"
		:class="{active:currentIndex == index}"
		@click="changeIndex(index)">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default{
		name:'TabControl',
		data(){
			return {
				title:["流行","新款","精选"],
				currentIndex:0
			}
		},
		methods:{
			changeIndex(index){
				this.currentIndex = index
				
				// 将用户点击的index传给index.vue
				this.$emit('getIndex',this.currentIndex)
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		justify-content: space-around;
		margin: 15rpx 0;
		font-size: 32rpx;
		text-align: center;
	}
	.tab-control-item{
		width: 100rpx;
		padding-bottom: 12rpx;
	}
	.active{
		color:#ff5777;
		border-bottom: 6rpx solid #ff5777;
		
	}
</style>
