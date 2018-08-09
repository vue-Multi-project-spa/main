window._setTimeout = window.setTimeout

window.setTimeout = function(fn,time){
	return _setTimeout(fn,time)	
}


window._setInterval = window.setInterval

window.setInterval = function(fn,time){
	return _setInterval(fn,time)	
}