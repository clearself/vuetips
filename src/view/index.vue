<template>
	<div>
		<myHeader title="VUE常用提示弹框组件"></myHeader>
		<div class="ub ub-ver list">
			<div class="ub ub-ac ub-f1 list-item" @click="toastTop">tosat提示框（顶部）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="toastMiddle">tosat提示框（屏幕中间）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="toastBottom">tosat提示框（底部）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="loadingTop">loading提示框（顶部）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="loadingMiddle">loading提示框（屏幕中间）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="loadingBottom">loading提示框（底部）</div>
			<div class="ub ub-ac ub-f1 list-item" @click="alert">alert提示框</div>
			<div class="ub ub-ac ub-f1 list-item" @click="confirm">confirm提示框</div>
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
			loadingTop(){
				app.loading('Loading','top')
			},
			loadingMiddle(){
				app.loading('Loading','middle')
			},
			loadingBottom(){
				app.loading('Loading','bottom')
			},
			alert(){
				app.alert('提示','hello world!')
			},
			confirm(){
				app.confirm('提示','确定退出？',{'sure':'你点击了确定！','cancle':'你点击了取消'},function(){
					app.toast(this.sure,'top');
				},function(){
					app.toast(this.cancle,'top');
				})
			}
		}
	}
</script>

<style>
	.list{
		padding:30px;
	}
	.list-item{
		height:80px;
		font-size:28px;
		border-bottom: thin solid #ccc;
	}
</style>