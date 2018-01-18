<template>
<div>
	<div class="leftTree animated fadeInUp">
		<ul>
			<router-link :to="{ name: 'home' }" tag="li">首页</router-link>
			<router-link :to="{ name: 'html' }" tag="li">html</router-link>
			<router-link :to="{ name: 'javascript' }" tag="li">javascript</router-link>
			<router-link :to="{ name: 'css', params: { userId: 123 } }" tag="li">css</router-link>
		</ul>
	</div>	
	<div class="rightMain  animated fadeInDown">
		<router-view></router-view>
	</div>
</div>
	
</template>
<style scoped> 
.router-link-active { background:  #4AA87D }
.leftTree{
  width:200px;
  background: #49CC90;
  height: calc(100% - 100px);
  position:absolute;
  float: left;
} 
 .leftTree ul li{
  list-style: none;
} 
ul,li{
  list-style-type: none;
  list-style: none;
  padding: 0;
  margin: 0;
}
li{
	width: 100%;
	height:40px;
	line-height: 40px;
	cursor: pointer;
	  color: #fff;
	  border-bottom: 1px dotted #ccc;

}
li:hover{
	background: #4AA87D;
}
.rightMain{
	width:calc(100% - 200px);
  	height: calc(100% - 100px);
  	position: absolute;
  	background: #ccc;
    	margin-left: 200px;
}
</style>
