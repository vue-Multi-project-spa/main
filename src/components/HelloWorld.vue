<template>
  <div class="hello">
    <h1 @click="r">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is main-component HelloWorld',
    }
  },
  created(){
    VK.routerSave({
      fullPath: '/aaa/aaa/ccc'
    })
    document.onclick = ()=>{
    VK.backSavedRouter()
    }
  },
  methods:{
    r(path){
      this.$router.push({path:'test'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
