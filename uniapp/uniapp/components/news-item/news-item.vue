<template>
	<view>
		<view @click.native="navigator(item.id)" class="news_item" v-for="item in list" :key="item.id">
			<image src="./image/myPicture.jpg"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatData}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props:['list'],
		filters:{
			formatData(date){
				const newDate=new Date(date)
				const year=newDate.getFullYear();
				const month=newDate.getMonth()+1;
				const day=newDate.getDay()
				return year+'-'+month+'-'+day
			}
		},
		methods:{
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;

		image {
			max-width: 200rpx;
			min-width: 200rpx;
			height: 150rpx;
		}

		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.tit {
				font-size: 30rpx;
			}

			.info {
				font-size: 24rpx;

				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
