import asyncModules from './async_modules'
import modules from './modules'

const loadJs = (src, name)=>{
	const scriptTag = document.createElement('script')
	scriptTag.type = "text/javascript"


	return new Promise((resovle, reject)=>{
		scriptTag.onload = function(){
            resovle(name)
        }
        scriptTag.src = src
		document.head.appendChild(scriptTag)
	})
}

export default (name)=>{
	let com = asyncModules[name]
	if(com.src){
		loadJs(com.src, name).then((name)=>{
			return loadJs(window[name].src, name)
		})
	}
}

export {
	loadJs
}
