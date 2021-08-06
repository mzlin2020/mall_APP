<template>
	<view class="detail-comment" v-if="commentInfo">
		<view class="headInfo" v-if="commentNum">
			宝贝评价({{commentNum}})
		</view>
		<!-- 用户信息 -->
		<view class="userInfo">
			<image :src="commentInfo.user.avatar" mode=""></image>
			<text>{{commentInfo.user.uname}}</text>
		</view>
		
		<!-- 评论内容 -->
		<view class="content">
			{{commentInfo.content}}
		</view>
		
		<!-- 参数信息 -->
		<view class="desc">
			<text class="time">{{commentInfo.created | getData}}</text>
			<text>{{commentInfo.style}}</text>
		</view>
		<!-- 查看更多 -->
		<view class="commentMore">
			<button type="default" size="mini" @click="btnClick">查看更多评价</button>
		</view>
	</view>
</template>

<script>
	import {formatDate} from '../../../common/utuls.js'
	
	export default{
		name:"DeatilComment",
		props:{
			commentInfo:{
				type:Object,
				default(){
					return {}
				}
			},
			commentNum:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		filters:{
			getData: value => {
			  // 将ms转化成固定格式
			  let date = new Date(value * 1000);
			  return formatDate(date,'yyyy-MM-dd hh:mm');
			}
		},
		methods:{
			btnClick(){
				uni.showToast({
					title:"敬请期待",
					icon:"none"
				})
			}
		}
	}
</script>

<style scoped>
	.headInfo{
		margin: 40rpx 20rpx;
		font-size: 34rpx;
		font-weight: 600;
		color: #333;
	}
	.userInfo>image{
		width: 100rpx;
		height: 100rpx;
		vertical-align: middle;
		border-radius: 50%;
		margin: 0 15rpx;
	}
	.userInfo{
		color: #222;
		margin-bottom: 20rpx;
	}
	.content,.desc{
		padding: 10rpx 30rpx;
		text-align: justify;
	}
	.desc{
		color: #808080;
		font-size: 26rpx;
	}
	.time{
		margin-right: 20rpx;
	}
	.commentMore{
		margin: 30rpx 0;
		text-align: center;
		padding-bottom: 20rpx;
		box-shadow: 0 5px 3px rgba(100,100,100,0.08);
	}
</style>
