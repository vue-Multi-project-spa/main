function _push(path){ 
	if(this.records.length === 0){
		this.records.push('/')
	}

	const name = path.replace(/(.*)\?.*/,'$1').replace(/\/([^\/]*).*/,'$1')
	const lastName = this.records[this.records.length - 1].replace(/(.*)\?.*/,'$1').replace(/\/([^\/]*).*/,'$1')

	if(this.records.length >1 &&  path === this.records[this.records.length-2] ){
		this.records.pop()
		return 
	}

	if(name !== lastName){
		this.records.push(path)
	}else{
		this.records.splice(this.records.length-1, 1, path)
	}

	findLoop(this.records)
}

function jumpBack(){
	let record 
	if(this.records.length > 1){
		this.records.splice( this.records.length - 1, 1)
		record = this.records[this.records.length - 1]
	}

	this._router.push({path:record})
} 

function findLoop (arr){
	const len = arr.length
	if(len === 1 )return

	const halfLen = Math.ceil( len / 2 )
	let num = 1
	while(num < halfLen){
		if(simpleSame(arr, num, len)){
			while(num > 0){
				arr.pop()
				num--
			}
			break;
		}
		num++
	}
}

function simpleSame(arr, num, len){

	for(let i = 1; i < num + 1; i++){
		if(arr[len-i] !== arr[len - i - num]){
			return false
		}
	}
	return true
}

function routerSave(option){
	if(!option.fullPath){
		console.log("routerSave option must has 'fullPath' key &&  fullPath != false ")
	}

	this.directionalRecord.push(option)
}

function backSavedRouter(){
	if(!this.directionalRecord.length){
		console.warn('nobody saved router')
		return
	}
	const record = this.directionalRecord.pop()

	this._router.push({path: record.fullPath})
}

export {
	_push,
	jumpBack,
	routerSave,
	backSavedRouter
}