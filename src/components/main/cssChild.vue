<template>
	<div>
		<h2>css的子组件css-child部分</h2>
		<h3>这里是从css里获取的值：</h3><p>{{msg}}</p>
		<hr>
		<h3>点击从子组件传到父组件</h3>
		<button @click="sendMsgToParent">传值到父组件</button>
	</div>
</template>	
<script>
	export default{
		data:function(){
			return {
				arr:[1,2,3,4,5,5,6]
			}
		},
		props:['msg'],
		methods:{
			sendMsgToParent () {
				this.$emit('listenToChildEvent',this.arr)
			}
		}
	}
</script>
<style scoped>
	h3{
		color: #4A8D6E;
	}
</style>