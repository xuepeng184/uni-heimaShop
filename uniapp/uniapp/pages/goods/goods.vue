<template>
	<view class="goods_list">
		<goods-list :goods='goods'></goods-list>
		<view class="isOver" v-if="flag">
			------我是有底线的------
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false
			}
		},
		components: {
			'goods-list': goodsList
		},
		methods: {
			async getGoodsList() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageindex
				})
				console.log('goods', res)
				this.goods = [...this.goods, ...res.data.message]
				
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			if (this.goods.length < this.pageindex * 10) {
				return this.flag = true
			}
			this.pageindex++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			console.log(456)
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(() => {
				this.getGoodsList().then(()=>{
					uni.stopPullDownRefresh()
				})
			}, 1000)
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background-color: #eee;
	}

	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>
