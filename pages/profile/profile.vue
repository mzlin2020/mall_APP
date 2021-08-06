<template>
	<view class="profile">
		
		<profile-login />
		<profile-assets />
		<profile-list />
	</view>
</template>

<script>
	// 用户登录
	import ProfileLogin from './childComps/ProfileLogin.vue'
	// 用户资产
	import ProfileAssets from './childComps/ProfileAssets.vue'
	// 其他项目
	import ProfileList from './childComps/ProfileList.vue'
	export default {
		name:"profile",
		components:{
			ProfileLogin,
			ProfileAssets,
			ProfileList
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
