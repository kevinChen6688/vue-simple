<template>
  <div>
    <h1 class="animated fadeInUpBig">{{ msg }}</h1>
      <div>
        <left-tree/> 
      </div>
  </div>
</template>

<script>
import LeftTree from './leftTree'
import animate from 'animate.css'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    LeftTree,animate
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul ,li{
  list-style-type: none;
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  color: #42b983;
}

</style>
