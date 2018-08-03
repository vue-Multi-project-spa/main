// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import loadRouter from './config'
//import utils from './config/utils'
// import {loadJs} from './config'
import modules from './config/modules'

import Vk from './utils'

window.VK = new Vk({router})

router.beforeEach((to, from, next)=>{
	
	console.log('to',to.matched)
	console.log('from',from)

// 	//一级path
	
	const toPath = to.path.replace(/(.*)\?.*/,'$1').replace(/\/([^\/]*).*/,'$1')
//	const fromPath = from.path.replace(/(.*)\?.*/,'$1').replace(/\/([^\/]*).*/,'$1')



	if(toPath){
		loadRouter(toPath).then((toPath)=>{
			
		})
	}
	
	VK._push(to.fullPath)
	console.log(VK.records)
	next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

window.onpopstate=function(ev){
	console.error(ev)
}
