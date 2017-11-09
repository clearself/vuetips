import Vue from 'vue'
import Router from 'vue-router'

/*路由组件区*/

import Index from './view/index'
import Toast from './view/toast'
import Loading from './view/loading'
import Header from './view/header'
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
		}
	]
})