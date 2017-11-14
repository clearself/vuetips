<template>
	<div>
		<myHeader fixed title="scroll组件infinite"></myHeader>
		<div class="scroll">
			<Scroll @infinite-scroll="loadmore">
				<ul class="list">
					<li v-for="item in dataList">
						{{ item }}
					</li>
				</ul>
				<div class="loading-bar">
					<svg class="icon icon-loading" aria-hidden="true">
						<use xlink:href="#icon-loading"></use>
					</svg>
					加载中...
				</div>
			</Scroll>
		</div>
	</div>
</template>

<script>
	import myHeader from '../components/myHeader'
	import Scroll from '../components/scroll/scroll';
	export default {
		name: 'infinite-scroll',
		components: {
			Scroll,
			myHeader
		},
		data() {
			return {
				dataList: [
					'第1条数据',
					'第2条数据',
					'第3条数据',
					'第4条数据',
					'第5条数据',
					'第6条数据',
					'第7条数据',
					'第8条数据',
					'第9条数据',
					'第10条数据',
					'第11条数据',
					'第12条数据',
					'第13条数据',
					'第14条数据'
				],
				iconLink: ' '
			};
		},
		methods: {
			loadmore() {
				setTimeout(() => {
					for(var i=0;i<10;i++){
						this.dataList.push('新加载的10条数据')
					}
					loaded('done');
				}, 100);
			}
		}
	};
</script>

<style scoped lang="scss">
	.scroll {
		position: absolute;
		left: 0;
		top: 90px;
		right: 0;
		bottom: 0;
		z-index: 2;
	}
	
	.loading-bar {
		height: 80px;
		text-align: center;
		line-height: 80px;
	}
	
	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
	
	.icon-arrow {
		transition: .2s;
		transform: rotate(180deg);
	}
	
	.icon-loading {
		transform: rotate(0deg);
		animation-name: loading;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
	
	@keyframes loading {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.list {
		font-size: 24px;
		li:nth-child(even) {
			background: #F5F5F5;
		}
		li:nth-child(odd) {
			background: #E1FFFF;
		}
		li {
			padding-left: 30px;
			height: 100px;
			line-height: 100px;
			background: #fff;
			a {
				display: block;
				height: 100%;
			}
		}
	}
	
</style>