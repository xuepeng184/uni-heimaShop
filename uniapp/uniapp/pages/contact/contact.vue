<template>
	<view class="contact">
		<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" class="img"></image>
		<view class="info">
			<view @click="phone">联系电话：13533393157（ 点击拨打 ）</view>
			<view>联系地址：重庆市南岸区南山街道崇文路2号重庆邮电大学</view>
		</view>
		<map key="map" :latitude="latitude" scale="14" :longitude="longtitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longtitude:106.614389,
				latitude:29.537621,
				markers:[
					{
						longtitude:106.614389,
						latitude:29.537621,
						iconPath:'../../static/hmlogo.png',
						width:30,
						height:30
					}
				]
			};
		},
		methods:{
			phone(){
				uni.makePhoneCall({
					phoneNumber:'13533393157'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	
	map{
		height: 750rpx;
		width: 750rpx;
	}
}
</style>
