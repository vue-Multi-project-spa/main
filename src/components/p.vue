<template>
	<div>
    	this is p component
	</div>
</template>
<script>
export default {
	data(){
		return {
			currentRouter: ''
		}
	},
	created(){
		console.log(this.$route.fullPath)
	}
}
</script>