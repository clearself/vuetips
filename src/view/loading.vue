<template>
	<div>
		<myHeader title="loading组件"></myHeader>
		<div class="ub ub-ver list">
			<div class="ub ub-ac ub-f1 list-item" @click="loadingTop">loading提示框（顶部）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="loadingMiddle">loading提示框（屏幕中间）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="loadingBottom">loading提示框（底部）</div>
			<div class="ub ub-ac ub-f1 list-item marT50" @click="loadingHide">关闭loading提示框</div>
		</div>
	</div>
</template>

<script>
	import myHeader from '../components/myHeader'
	import app from '../public.js'
	export default {
		components: {
			myHeader
		},
		methods:{
			loadingTop(){
				app.loading('Loading','top')
			},
			loadingMiddle(){
				app.loading('Loading','middle')
			},
			loadingBottom(){
				app.loading('Loading','bottom')
			},
			loadingHide(){
				app.hideloading();
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../sass/style.scss';
</style>