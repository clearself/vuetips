import Vue from 'vue'
import Router from 'vue-router'

/*路由组件区*/

import Index from './view/index'
import Toast from './view/Toast'
import Loading from './view/Loading'
import Header from './view/Header'
import Button from './view/Button'
import Refresh from './view/Refresh'
import Scroller from './view/Scroller'
import Loadmore from './view/Loadmore'
import Infinite from './view/Infinite'
Vue.use(Router)

export default new Router({
	base: __dirname,
	routes: [
		{
			path: '/',
			component: Index
		},
		{
			path: '/toast',
			component: Toast
		},
		{
			path: '/loading',
			component: Loading
		},
		{
			path: '/header',
			component: Header
		},
		{
			path: '/button',
			component: Button
		},
		{
			path: '/refresh',
			component: Refresh
		},
		{
			path: '/loadmore',
			component: Loadmore
		},
		{
			path: '/scroller',
			component: Scroller
		},
		{
			path: '/infinite',
			component: Infinite
		}
	],
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})