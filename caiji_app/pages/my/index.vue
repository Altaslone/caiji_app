<template>
	<view class="content">

		<view class="top">
			<image class="user_head" :src='real_head' mode="aspectFit"></image>

			<view class="my_set">
				<uni-icon type="gear" color="#FFFFFF" size="24"></uni-icon>
			</view>

			<view class="days">
				<text>记账 {{days}}天</text>
			</view>
		</view>

	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"

	export default {
		data() {
			return {
				default_head: '../../static/img/default_head.png',
				real_head: '',
				days: 99999,
			};
		},
		components: {
			uniIcon
		},
		onLoad() {
			let real_head = uni.getStorageSync('real_head');
			if (real_head) {
				this.real_head = real_head;
			} else {
				this.real_head = this.default_head;
			}

			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		},
		methods: {

		}
	}
</script>

<style>
	.top {
		background-color: #FF5555;
		height: 450upx;
	}

	.my_set {
		position: fixed;
		top: 80upx;
		right: 20upx;
	}

	.user_head {
		position: fixed;
		top: 170upx;
		left: 24upx;

		height: 110upx;
		width: 110upx;
		border-radius: 50%;

		background-color: #FFFFFF;
	}

	.days {
		position: fixed;
		top: 170upx;
		right: 0upx;
		
		padding: 0upx 6upx 0upx 15upx;
		
		background-color: #FF0000;
		color: #FFFFFF;
		border-top-left-radius: 18upx;
		border-bottom-left-radius: 18upx;
		
		font-size: 18upx;
		height: 36upx;
		line-height: 36upx;
	}
</style>
