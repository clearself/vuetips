<template>
	<div>
		<myHeader title="button组件"></myHeader>
		<div class="ub ub-ver list">
			<my-button class="marT50" :buttonClick="defaultBtn"></my-button>
			<my-button class="marT50" title="确定" activeColor="#fff" activeBgc="#19be6b" fontSize="18px" :buttonClick="otherBtn"></my-button>
			<my-button style="width:80%;" class="marT50" title="确定" activeColor="#fff" activeBgc="#ed3f14" fontSize="16px" :buttonClick="otherBtn"></my-button>
			<my-button style="width:60%;"class="marT50" title="确定" activeColor="#fff" activeBgc="#f90" :buttonClick="otherBtn"></my-button>
			<my-button style="width:50%;" class="marT50" title="确定" activeColor="#fff" activeBgc="#2db7f5" :buttonClick="otherBtn"></my-button>
		</div>
	</div>
</template>

<script>
	import myHeader from '../components/myHeader'
	import myButton from '../components/myButton'
	import app from '../public.js'
	export default {
		components: {
			myHeader,
			myButton
		},
		data(){
			return{
				
			}
		},
		methods:{
			defaultBtn(){
				app.toast('默认按钮');
			},
			otherBtn(){
				app.toast('可传参改变按钮的样式');
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../sass/style.scss';
</style>