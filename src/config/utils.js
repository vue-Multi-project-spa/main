import router from '../router'

window.VK = {
	//Vue,
	//Vuex,
	//store,
	//getCookie,
	//setCookie,
	//setSession
	//getSession
	//setLocal
	//getLocal	

	/*
	*	id {type: String}  business id(业务id)
	*	name {type: String} component name (组件名)
	*	component {type: Objecj} 组件option
	*/ 
	registerComponent({ id, name, component}){
		
		VK[id].component[name] = component
	},
	registerRouter({ name, routers}){

		router.addRoutes(routers)

	},
	//子模块 信息 结构
	// {
			// src: '',
			// time: '',
			// component:{
			// 	name : component
			// }
	// }
}