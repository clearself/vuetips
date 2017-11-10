import Vue from 'vue'
import Router from 'vue-router'

/*路由组件区*/

import Index from './view/index'
import Toast from './view/Toast'
import Loading from './view/Loading'
import Header from './view/Header'
import Button from './view/Button'
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
		}
	]
})