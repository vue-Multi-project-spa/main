<template>
	<div>
    	<component :is="currentRouter"></component>
	</div>
</template>
<script>
import modules from '../config/modules'
export default {
	data(){
		return {
			currentRouter: ''
		}
	},
	created(){
		const name = this.$route.params.name
		console.log(modules)
		
		this.currentRouter = modules[name]
	}
}
</script>