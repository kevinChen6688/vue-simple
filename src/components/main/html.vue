<template>
	<div>
		<h2 class="animated bounceInUp">html 标签</h2>
		<div class="main-left">
			<ul class="animated fadeInDown leftText">
				<li v-for="(item,index) in items">
					<span>{{ index+1 }}.</span>
					<label>{{item.label}}</label>
					<sapn>{{item.value}}</sapn>
					<button class="btn-delete" @click="deleteItem(index)">删除</button>
				</li>
			</ul>
			<div >
				label:<input type="text"  class="animated fadeInLeft" v-model="inputLabel"><br><br>
				address:<input type="text" class="animated fadeInLeft" v-model="inputVal"><br><br>
				<button class="btn-li animated fadeInRight" @click="addItem()">添加</button>
			</div>
		</div>
		<div class="main-center">
			<ul class="animated fadeInDown leftText">
				<li v-for="(item,index) in items">
					<span>{{ index+1 }}.</span>
					<label>{{item.label}}</label>
					<sapn>{{item.value}}</sapn>
					<button class="btn-delete" @click="deleteItem(index)">删除</button>
				</li>
			</ul>
			<div>
				label:<input type="text"  class="animated fadeInLeft" v-model="inputLabel"><br><br>
				address:<input type="text" class="animated fadeInLeft" v-model="inputVal"><br><br>
				<button class="btn-li animated fadeInRight" @click="addItem()">添加</button>
			</div>
		</div>
		<div class="main-right">
			<ul class="animated fadeInDown leftText">
				<li v-for="(item,index) in items">
					<span>{{ index+1 }}.</span>
					<label>{{item.label}}</label>
					<sapn>{{item.value}}</sapn>
					<button class="btn-delete" @click="deleteItem(index)">删除</button>
				</li>
			</ul>
			<div>
				label:<input type="text"  class="animated fadeInLeft" v-model="inputLabel"><br><br>
				address:<input type="text" class="animated fadeInLeft" v-model="inputVal"><br><br>
				<button class="btn-li animated fadeInRight" @click="addItem()">添加</button>
			</div>
		</div>
	</div>
</template>
<script>
import animate from 'animate.css'
export default {
	data: function(){
		return {
			inputLabel:'',
			inputVal:'',
			items:[
				{'label':'html5教程','value':'http://www.w3school.com.cn/html5/index.asp'},
				{'label':'html5简介','value':'http://www.w3school.com.cn/html5/html_5_intro.asp'},
				{'label':'html5视屏','value':'http://www.w3school.com.cn/html5/html_5_video.asp'},
				{'label':'html5音频','value':'http://www.w3school.com.cn/html5/html_5_audio.asp'}
			]
		}
	},
	methods:{
		addItem:function(){
			this.items.push({
				'label':this.inputLabel,
				'value':this.inputVal
			});
			this.inputLabel="";
			this.inputVal="";
		},
		deleteItem:function(index){
			    this.items.splice(index,1); 
			    return this;
		}
	}
}
</script>
<style>
	.main-left,.main-center,.main-right{
	    WIDTH: 33.33%;
	    FLOAT: LEFT;
	    padding-bottom: 20px;
	}
	.leftText{
		text-align: left;
		list-style: none;
		font-size: 16px;
		background: #747F8A;
		color: #fff;
		margin-left: 6px;
	}
	.leftText li{
		padding: 10px 0;
	}
	.btn-li{
		    background: #4ACC90;
		    text-align: center;
		    border: none;
		    color: #fff;
		    padding: 4px 20px;
		    cursor: pointer;
	}
	.btn-delete{
		background: #f00;
		color: #fff;
		border:none;
		margin-left: 10px;
		cursor: pointer;
	}
</style>
