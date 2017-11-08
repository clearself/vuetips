<template>
	<div class="ub header">
		<div class="left-l" :class="{'back':backIcon?true:false}" @click="back"></div>
		<div class="ub ub-ac ub-pc ub-f1 center">
			{{title}}
		</div>
		<div class="left-r"></div>
	</div>
</template>
<script>
	export default {
		props:{
			title:{
				type: String
			},
			backIcon:{
				type: Boolean,
				default:true
			}
		},
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		methods:{
			back(){
				history.back();
			}
		}
	}
</script>

<style lang='scss' scoped>
	.header {
    width: 100%;
    height: 90px;
    background-color: lightseagreen;
}

.header>div {
    height: 100%;
}

.header>div.left-r {
    width: 100px;
}

.header>div.left-l {
    width: 100px;
}

.header>div.center {
    color: #fff;
    line-height: 90px;
    text-align: center;
    font-size: 36px;
}
</style>