<template>
	<div>
		<myHeader title="toast组件"></myHeader>
		<div class="ub ub-ver list">
			<div class="ub ub-ac ub-f1 list-item" @click="toastTop">toast提示框（顶部）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="toastMiddle">toast提示框（屏幕中间）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="toastBottom">toast提示框（底部）</div>
			<div class="ub ub-ac ub-f1 list-item marT50" @click="toastHide">关闭toast提示框</div>
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
			toastTop(){
				app.toast('hello world!','top')
			},
			toastMiddle(){
				app.toast('hello world!','middle')
			},
			toastBottom(){
				app.toast('hello world!','bottom')
			},
			toastHide(){
				app.hidetoast();
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../sass/style.scss';
</style>