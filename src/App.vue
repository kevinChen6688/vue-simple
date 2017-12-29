<template>
  <div id="app">
    <hello-world/> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
h1{
  margin: 0;
  padding: 22px;
  background: #E7E5DC;
  color: black;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
