// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import loadRouter from './config'
import utils from './config/utils'
// import {loadJs} from './config'
//import modules from './config/modules'


router.beforeEach((to, from, next)=>{
	if(to.fullPath == '/'){
		console.log('root path')
		
		next()
		return 
	}
	const name = to.fullPath.replace(/^\/([^\/]\w+)(\/.*)?/,'$1')
	console.log(to.fullPath)
	//  need check if it is main project's path
  	//  need add 404,403 check ?
	loadRouter(name).then((name)=>{})
	
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
