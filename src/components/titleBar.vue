<template>
	<div id="Li_titleBar">
		<h2>
			<router-link to="/" class="Li_bar"><</router-link>
			标题+++++{{count}}
			 <!--下面的就是样式绑定-->
			<a href="#" @click="alert" :class="{white_color:isWhite}">222</a>
			<input type="text" v-model="num" v-on:change="changeCount">{{num}}
		</h2>
	</div>
</template>
<script>
//这个请求的vuex里面的数据
	import store from '../../vuex/store'
	export default {
		data(){
			return {
				num:'5',
				isWhite:true
			}
		},
		computed:{
			//当数据发送改变的时候 自动回刷新回来
			count () {
		      return this.$store.state.count
		  },
		},
		methods:{
			//把vuex里面mutations规定的方法绑定出来
			alert(){
				this.$store.commit("showCount");
			},
			//把数据传递给vuex
			changeCount(){
				this.$store.state.count=this.num;
			}
		}
	}
</script>
<style scoped>
.white_color{
	color:white;
}
#Li_titleBar{
	position: fixed;top: 0;width: 100%;background: chocolate;
}
h2{
  text-align: center;
  overflow: auto;
  font-size: 1.2rem;
  font-weight: lighter;
  position: relative;
}
.Li_bar{
  text-decoration: none;
  font-weight: bolder;
  position: absolute;
  left: 0;
  display: inline-block;
  width: 3rem;
  height: 100%;
}
</style>