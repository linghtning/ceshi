<template>
	<div id="home_page">
		<div class="" >{{reName}} <button @click="reverse">点击反选</button></div>
		<img :src="home_page" :alt="home_page_alt">
		<div class="home_name" > 
			<h3 >{{home_name}}</h3>
		</div>
		<ul class="home_main">
			<li v-for="(list,index) in lists">
				<img :src="list.img_src"/>
				<h4>{{list.title}} ++{{index}}</h4>
				<p>{{list.content}}</p>
			</li>
		</ul>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				home_page:'static/home_page.jpg',
				home_page_alt:'Cat',
				home_name:'猫猫',
				reName:"this is fanxuan",
				lists:[
					{
						img_src:'static/2.jpg',
						title:'这个是个好看的小猫0',
						content:'I like the cat because it make me feel good'
					},
					{
						img_src:'static/2.jpg',
						title:'这个是个好看的小猫1',
						content:'I like the cat because it make me feel good'
					},
					{
						img_src:'static/2.jpg',
						title:'这个是个好看的小猫2',
						content:'I like the cat because it make me feel good'
					},
					{
						img_src:'static/2.jpg',
						title:'这个是个好看的小猫3',
						content:'I like the cat because it make me feel good'
					}
				]
			}
		},
		methods:{
			reverse:function(){
				return this.reName=this.reName.split('').reverse().join('')
			}
		}
	}
</script>

<style scoped>
	img{
		width: 100%;
	}
	.home_main{
		overflow: auto; 
	}
	.home_main li{
		list-style: none;
	}
	.home_main li img{
		width: 8rem;
	}
	.home_name{
	  position: relative;
	  overflow: auto;
	  top: -2.5rem;
	  color: #FFF;
	  text-align: right;
	  width: 100%;
	  right: 1rem;
	  text-shadow: #555 0.2rem 0.2rem 0.2rem;
	}
	</style>