<template>
	<div>
		<myHeader fixed title="scroll组件上拉加载更多"></myHeader>
		<div class="scroll">
			<Scroll :bottom-load-method="loadmore" @bottom-state-change="stateChange">
				<ul class="list">
					<li v-for="item in dataList">
						{{ item }}
					</li>
				</ul>
				<!-- vue 2.5 use slot-scope -->
				<template slot="bottom-block" slot-scope="props">
					<div class="bottom-load-wrapper">
						<svg class="icon" :class="{
		                'icon-arrow': props.state === 'trigger',
		                'icon-loading': props.state === 'loading'
		             }" aria-hidden="true">
							<use :xlink:href="iconLink"></use>
						</svg>
						{{ props.stateText }}
					</div>
				</template>
			</Scroll>
		</div>
	</div>
</template>

<script>
	import myHeader from '../components/myHeader'
	import Scroll from '../components/scroll/scroll';
	export default {
		name: 'simple-pull-to-loadmore',
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
					'第10条数据'
					
				],
				iconLink: ''
			};
		},
		methods: {
			loadmore(loaded) {
				setTimeout(() => {
					for(var i=0;i<10;i++){
						this.dataList.push('新加载的10条数据')
					}
					loaded('done');
				}, 500);
			},
			stateChange(state) {
				if(state === 'pull' || state === 'trigger') {
					this.iconLink = '#icon-arrow-bottom';
				} else if(state === 'loading') {
					this.iconLink = '#icon-loading';
				} else if(state === 'loaded-done') {
					this.iconLink = '#icon-finish';
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	.bottom-load-wrapper {
		line-height: 100px;
		text-align: center;
	}
	.scroll {
		position: absolute;
		left: 0;
		top: 90px;
		right: 0;
		bottom: 0;
		z-index: 2;
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
