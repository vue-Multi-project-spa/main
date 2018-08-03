import { _push, jumpBack, routerSave, backSavedRouter} from './routeRecord'
import { _deepCopy } from './private'

class VK {
	constructor({Vue, Vuex, store, router}){
		this.Vue = Vue
		this.Vuex = Vuex
		this.store = store

		this.records = []
		this.directionalRecord = []

		this._router = router

	}

	forword(){

	}

	registerRouter({ name, routers}){
		if(this === undefined){
			return console.error('use registerRouter example: VK.registerRouter(option) or registerRouter.call(VK,option)')
		}
		this._router.addRoutes(routers)
	}

	[_deepCopy](p){
		const _this = this
		if(p instanceof Element) {
	        return p;
		}
		if(Object.prototype.toString.call(p) === '[object Array]'){
			let arr = []

			for(let i = 0; i< p.length; i++){
				arr.push(_this[_deepCopy](p[i]))
			}
			return arr
		}
		if(Object.prototype.toString.call(p) === '[object Object]'){
			let json = {}
			for(let name in p){
				if(p.hasOwnProperty(name)){
					json[name] = _this[_deepCopy](p[name])
				}
			}
			return json
		}
		return p
	}

}

Object.assign(VK.prototype,{
	_push,
	jumpBack,
	routerSave,
	backSavedRouter
})


export default VK