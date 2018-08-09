import asyncModules from './async_modules'
import loadedJs from './modules'

const loadJs = (src, name)=>{
	let scriptTags = document.querySelectorAll(`.${name}`)
    if(scriptTags.length){
        scriptTags.forEach((item)=>{
          if(item.src === src){
            document.head.removeChild(item)
          }
        })
    }
	const scriptTag = document.createElement('script')
	scriptTag.type = "text/javascript"
	scriptTag.className = name


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

	if(com && com.src){
		//setTimeout(()=>{
			return loadJs(com.src, name)
			.then((name)=>{

				console.log(loadedJs[name])
				if(loadedJs[name] && loadedJs[name].src === window[name].src){
					return new Promise((res, rej)=>{
						res('没有加载')
					})
				}

				loadedJs[name] = {
					src : window[name].src
				} 
				return loadJs(window[name].src, name)
			})
		//},1000)
		
	}else{
		return new Promise((res, rej)=>{
						res('没有加载')
					})
	}
}
