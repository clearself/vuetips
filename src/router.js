import Vue from 'vue'
import Router from 'vue-router'

/*路由组件区*/

import Index from './view/index'
Vue.use(Router)

export default new Router({
	base: __dirname,
	routes: [
		{
			path: '/',
			component: Index,
		}
	]
})