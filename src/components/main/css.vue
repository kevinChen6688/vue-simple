<template>
	<div>
		<h2 class="animated bounceInUp">css</h2>
		<p>拖拽排序</p>
		  <ol class="color-list animated bounceInUp">
		      <li 
		          class="color-item" 
		          v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
		          :key="color.text"
		      >{{color.text}}</li>
		  </ol>
	</div>
</template>
<script>
export default {
  data () {
    return {
        colors: [{
            text: "Aquamarine"
        }, {
            text: "Hotpink"
        }, {
            text: "Gold"
        }, {
            text: "Crimson"
        }, {
            text: "Blueviolet"
        }, {
            text: "Lightblue"
        }, {
            text: "Cornflowerblue"
        }, {
            text: "Skyblue"
        }, {
            text: "Burlywood"
        }]
    }
  }
}
</script>
<style>
	.color-item{
			width: 100px;
		    background: #f5f5f5;
		    padding: 1rem;
		    color: #5f5f5f;
		    transition: transform .3s;
	} 
</style>