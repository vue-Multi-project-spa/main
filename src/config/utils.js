import modules from './modules'
import router from '../router'
window.VK = {
	register({name, component, init}){
		
		modules[name] = component

		init && init()
	},
	registerRouter(routers){
		router.addRoutes(routers)
	}
}