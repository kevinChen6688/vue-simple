<template>
	<div>
		<h2 class="animated bounceInUp">css</h2>
          <div>
              <button class="color-list animated bounceInUp" v-for='(item,index) in arr' :class='{active:index==indexActive}' @click='changeItem(index)'>{{item.text}}</button>
              <p class="disNone animated rotateIn" v-for='(item,index) in arr' :class='{show:index==indexActive}'>{{item.cont}}</p>
          </div>
          <hr/>
          <hr/>
          <hr/>
          <div>
              <css-child :msg="arr" v-on:listenToChildEvent="showFromChild"></css-child>
              <p>从子组件获取的值：{{data}}</p>
              <p>从子组件获取cheng3的值：{{datas}}</p>
          </div>
          <hr/>
          
	</div>
</template>
<script>
import cssChild from './cssChild'
export default {
  data () {
    return {
        data:'',
        datas:'',
        msg:"这里是css传给子元素",
        message:'父传到子组件里面的值',
        indexActive:0,
        arr:[
            {"text":"按钮1","cont":"按钮11111"},
            {"text":"按钮2","cont":"按钮22222"},
            {"text":"按钮3","cont":"按钮33333"},
            {"text":"按钮4","cont":"按钮44444"},
            {"text":"按钮5","cont":"按钮55555"}
        ]
    }
  },
  methods:{
    changeItem:function(index){
        this.indexActive=index;
    },
    showFromChild (data) {
        this.data=data;
        var  datas=[];
        for(var i=0;i<data.length;i++){
            datas[i]=data[i]*3;
            
        }
        this.datas=datas;
    }
  },
  components:{
    cssChild
  }
}
</script>
<style>
    .active{
        color:#fff;
        background:#18BB9B;
    }
    .disNone{
        display:none;
    }
    .show{
        display:block;
    }
</style>