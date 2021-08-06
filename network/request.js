const base_URL = "http://152.136.185.210:7878/api/m5"

export function request (options) {
	return new Promise((resolve,reject)=>{
		uni.request({
			url:base_URL+options.url,
			method:options.methods || 'GET' ,  //请求的方法
			data:options.data || {},  //参数项
			// 成功发送网络请求时
			success:res=>{
				if(!res.data.success){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res) //外部可执行.then（）
			},
			fail:err=>{
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
			
		})
	})
}