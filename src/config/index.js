import asyncModules from './async_modules'
import modules from './modules'

const loadJs = (src)=>{
	const scriptTag = document.createElement('script')
	scriptTag.type = "text/javascript"


	return new Promise((resovle, reject)=>{
		scriptTag.onload = function(){

           
            resovle();

        }
        scriptTag.src = src
		document.head.appendChild(scriptTag)
	})
}

export default function(Vue){
	for (let item in asyncModules){
		let com = asyncModules[item]
		if(com.src){
			const name = com.name
			modules[name] = name
			Vue.component(name, (resolve, reject)=>{
				loadJs(com.src).then(()=>{
					// const src = com.src.replace(/\/[^\/]+\.js/,'/app.js')
					// console.log(src)
					// loadJs(src).then(()=>{
						resolve(modules[name])
					//})
				})
			})
		}
	}
}
