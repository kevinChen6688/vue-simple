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
				<p v-if="show" class="red">label或者address不能为空！</p>
				<button class="btn-li animated fadeInRight" @click="addItem()">添加</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function(){
		return {
			show:false,
			inputLabel:'',
			inputVal:'',
			items:[]
		}
	},//这里是一进来金请求数据渲染
	created(){
        this.request();
   },
	methods:{
		// 一进来就进行获取数据
		request () {
			this.$http.get('../../../static/json.json').then((resp) => {
				this.items=resp.body.items;
			});
		},
		addItem:function(){
			if(this.inputLabel ==''|| null ||undefined){
				this.show=true;
			}else if(this.inputVal ==''|| null ||undefined){
				this.show=true;
			}else{
				this.items.push({
					'label':this.inputLabel,
					'value':this.inputVal
				});
				this.inputLabel="";
				this.inputVal="";
				this.show=false;
			}
		},
		deleteItem:function(index){
			    this.items.splice(index,1); 
			    return this;
		}
	}
}
</script>
<style>
	.main-left{
	    FLOAT: LEFT;
	    padding-bottom: 20px;
	}
	.red{
		color: #f00;
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
