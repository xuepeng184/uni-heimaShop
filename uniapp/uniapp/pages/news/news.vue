<template>
	<view class="news">
		<news-item :list="newsList" @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			//资讯数据
			async getNews(){
				const res=await this.$myRequest({
					url:'/api/getnewslist'
				})
				console.log('资讯数据',res)
				this.newsList=res.data.message
			},
			goDetail(id){
				uni.navigateTo({
					url:'../news-detail/news-detail?id='+id
				
				})
			}
		},
		components:{
			"news-item":newsItem,
		}
	}
</script>

<style lang="scss">
	.news{
		
	}
</style>
