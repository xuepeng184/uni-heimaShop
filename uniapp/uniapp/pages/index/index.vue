<template>
	<view class="home">
		<swiper indicator-dots circular="true" autoplay="true" interval="3000">
			<swiper-item v-for="(item,index) in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods='goods'></goods-list>
		</view>
	</view>

</template>

<script>
	import goodsList from '../../components/goods-list/goods-list'
	export default {
		data() {
			return {
				swipers: [],
				goods:[],
				navs:[
					{
						icon:'iconfont icon-ziyuan',
						title:'黑马超市',
						path:"/pages/goods/goods"
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:"/pages/contact/contact"
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:"/pages/pics/pics"
					},
					{
						icon:'iconfont icon-shipin',
						title:'学习视频',
						path:"/pages/videos/videos"
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		components:{
			'goods-list':goodsList
		},
		methods: {
			//获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				console.log('轮播图',res)
				this.swipers = res.data.message
			},
			// 获取商品列表数据
			async getHotGoods(){
				const res=await this.$myRequest({
					url:'/api/getgoods?pageindex=1'
				})
				console.log('列表数据',res)
				this.goods=res.data.message
			},
			//点击导航
			navItemClick(url){
				uni.navigateTo({
					url,
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}
	}

	.nav {
		display: flex;

		.nav_item {
			width: 25%;

			view {
				width: 120rpx;
				height: 120rpx;
				background: #b50e03;
				border-radius: 50%;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 45rpx;
			}

			text-align: center;

			text {
				font-size: 30rpx;

			}
		}
	}

	.hot_goods {
		background-color: #eee;
		overflow: hidden;
		margin-top: 10px;

		.tit {
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 7rpx 0;
		}
		
		
	}
</style>
