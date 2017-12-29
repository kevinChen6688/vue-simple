<template>
	<div style="width:100%;">
		<h2 class="animated bounceInUp">javascript</h2>
		<div class="main-left1">
			<video class="animated fadeInUpBig" src="../../assets/movie.webm" controls autoplay></video>
		</div>
		<div class="main-center1">
			 <el-amap class="animated fadeInDownBig" vid="amapDemo"></el-amap>
		</div>
	</div>
</template>
<script>
import animate from 'animate.css'
</script>
<style>
	.main-left1{
    	width: 52%;
		float:left;
		 height: 280px;
		margin-left:3px;
	}
	.main-center1{
		float:left;
		 width: 46%;
		 height: 280px;
	}
	.marTop{
		margin-top:30px;
	}
</style>