import router from '../router'

window.VK = {
	registerComponent({ name, component}){
		
		modules[name] = component
	},
	registerRouter({ name, routers}){

		console.log('name=',name)
		console.log(routers)
		router.addRoutes(routers)

		console.log(router)
	}
}