<template>
	<view class="category">
		<category-name :categoryName="categoryName" @getMaitKey="getMaitKey"/>
		<CategoryInfo :info="categoryInfo"/>
	</view>
</template>

<script>
	import CategoryName from './childComps/CategoryName.vue'
	import CategoryInfo from './childComps/CategoryInfo.vue'
	export default{
		name:"category",
		components:{
			CategoryName,
			CategoryInfo
		},
		data(){
			return{
				categoryName:[],
				firstMaitKey:null,
				categoryInfo:null,//保存具体信息
				
			}
		},
		onLoad(){
			uni.request({
				url:"http://152.136.185.210:7878/api/m5/category"
			}).then(res=>{
				this.categoryName = res[1].data.data.category.list
				// 获取第一个maitKey
				this.firstMaitKey = this.categoryName[0].maitKey
			})
		},
		methods:{
			getMaitKey(iid){
					uni.request({
						url:'http://152.136.185.210:7878/api/m5/subcategory?maitKey=' + iid
					}).then(res=>{
						if(this.categoryInfo){
							this.categoryInfo = "";
							this.categoryInfo = res[1].data;
							// console.log(this.categoryInfo)
						}
					}).catch(err=>{
						console.log(err)
					})
			}
		},
		watch:{
			//获取第一个分类的信息
			firstMaitKey(newValue){
				uni.request({
					url:'http://152.136.185.210:7878/api/m5/subcategory?maitKey=' + newValue
				}).then(res=>{
					this.categoryInfo = res[1].data
					// console.log(this.categoryInfo)
					
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
</style>