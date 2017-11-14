<template>
	<div>
		<myHeader :backArrow = false :backClick = false title="vue常用组件"></myHeader>
		<div class="ub ub-ver list">
			<router-link tag="div" class="ub ub-ac ub-f1 list-item" to="/toast">toast提示框</router-link>
			<router-link tag="div" class="ub ub-ac ub-f1 list-item" to="/loading">loading提示框</router-link>
			<div class="ub ub-ac ub-f1 list-item" @click="alert">alert弹框</div>
			<div class="ub ub-ac ub-f1 list-item" @click="confirm">confirm弹框</div>
			<router-link tag="div" class="ub ub-ac ub-f1 list-item" to="/header">header组件</router-link>
			<router-link tag="div" class="ub ub-ac ub-f1 list-item" to="/button">button组件</router-link>
			<div class="ub ub-ac ub-f1 list-item" @click="Popup">Popup弹窗</div>
			<router-link tag="div" class="ub ub-ac ub-f1 list-item" to="/refresh">scroll（下拉刷新）</router-link>
			<router-link tag="div" class="ub ub-ac ub-f1 list-item" to="/loadmore">scroll（上拉加载更多）</router-link>
			<router-link tag="div" class="ub ub-ac ub-f1 list-item" to="/infinite">scroll（上拉加载更多infinite）</router-link>
			<router-link tag="div" class="ub ub-ac ub-f1 list-item" to="/scroller">scroll（下拉刷新，上拉加载更多）</router-link>
		</div>
	</div>
</template>

<script>
	import Popup from '../components/Popup/Popup'
	import myHeader from '../components/myHeader'
	import app from '../public.js'
	export default {
		components: {
			myHeader
		},
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		methods:{
			alert(){
				app.alert('提示','hello world!');
			},
			confirm(){
				app.confirm('提示','确定退出？',{'sure':'你点击了确定！','cancle':'你点击了取消'},function(){
					app.toast(this.sure,'top');
				},function(){
					app.toast(this.cancle,'top');
				})
			},
			Popup(){
				var arrList = ['大学','中学','小学']
				Popup.show({
					itemList:arrList,
					indexClick:function(index){
						app.toast(arrList[index])
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../sass/style.scss';
	.github{
		width:90%;
		margin: 100px auto 0;
		height:80px;
		font-size:28px;
		border-bottom: thin solid #ccc;
	}
</style>