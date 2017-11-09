<template>
	<div>
		<myHeader title="header组件"></myHeader>
		<div class="ub ub-ver list">
			<myHeader class="marT50" headerBg = "green" title="header组件（可返回）"></myHeader>
			<myHeader :backArrow = "backArrow" :backClick = "backClick" headerBg = "red" class="marT50" title="header组件（不可返回）"></myHeader>
		</div>
	</div>
</template>

<script>
	import myHeader from '../components/myHeader'
	export default {
		components: {
			myHeader
		},
		data(){
			return{
				backArrow:false,
				backClick:false
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../sass/style.scss';
</style>