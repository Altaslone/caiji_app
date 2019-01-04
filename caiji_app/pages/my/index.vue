<template>
	<view class="content">

		<view class="top">
			<image class="user_head" :src='real_head' mode="aspectFit"></image>
		</view>

		<view class="">

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				default_head: '../../static/img/default_head.png',
				real_head: '',
			};
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
		background-color: #FF3333;
		height: 300upx;
	}

	.user_head {
		height: 100upx;
		width: 100upx;
		border: 2upx solid #C0C0C0;
		border-radius: 50%;
	}
</style>
