import modules from './modules'
import router from '../router'
window.VK = {
	registerCom({name, component, init}){
		
		modules[name] = component

		init && init()
	},
	registerRouter(routers){
		console.log(routers)
		router.addRoutes(routers)

		console.log(router)
	}
}