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

export default (name, fn)=>{
	let com = asyncModules[name]
	if(com.src){
		//setTimeout(()=>{
			return loadJs(com.src, name)
			.then((name)=>{
				return loadJs(window[name].src, name)
			})
		//},1000)
		
	}
}
