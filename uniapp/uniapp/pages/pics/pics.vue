<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view :class="active==index?'active':''" v-for="(item,index) in cates" :key="item.id"
				@click="leftChange(index,item.id)">{{item.title}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-for="(item,index) in aboutData" :key="item.id">
				<image @click="previewImg(index)" src="./image/myPicture.jpg"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="aboutData.length==0" class="empty">暂无数据QAQ</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				aboutData: []
			};
		},
		onLoad() {
			this.getPics()
		},
		methods: {
			async getPics() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				console.log('社区图片', res)
				this.cates = res.data.message
				this.leftChange(0, this.cates[0].id)
			},
			//改变选中项的背景色，并获取对应数据
			async leftChange(index, id) {
				this.active = index
				//获取数据
				const res = await this.$myRequest({
					url: '/api/getimages/' + id
				})
				console.log('对应图片', res)
				this.aboutData = res.data.message;
				console.log(this.aboutData.length)
			},
			//预览图片事件
			previewImg(index){
				let urls=this.aboutData.map(item=>item.img_url)
				uni.previewImage({
					urls,
					current:index
				})
			}
		},

	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			box-sizing: border-box;
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view {
				width: 100%;
				box-sizing: border-box;
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			
			.active {
				background-color: $shop-color;
				color: #fff;
			}
		}

		

		.right {
			height: 100%;
			width: 530rpx;
			margin: 0 auto;

			.item {
				height: 700rpx;
				overflow: hidden;

				image {
					width: 530rpx;
					height: 530rpx;
					border-radius: 5px;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
			.empty{
				display: block;
				font-size: 30px;
				color: #333;
				width: 100%;
				text-align: center;
				margin-top: 50%;
			}
		}
	}
</style>
