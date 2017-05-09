<template>
	<div id="slider">
		<ul class="Li_slider_nav">
			<li><router-link to="/Music">音乐</router-link></li>
			<li><router-link to="/Article">艺术</router-link></li>
			<li><router-link to="/Photo">照片</router-link></li>
			<li><router-link to="/Other">其他</router-link></li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
#slider {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #DDD;
}

.Li_slider_nav {
  display: flex;width: 100%;height: 100%;
 /* flex-direction: column-reverse;*/
  
}

.Li_slider_nav li {
 list-style-type: none;
 width: 25%;height: 100%;
  display: inline-flex;
}

.Li_slider_nav li a {
  display: inline-block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: #000;
}
.Li_slider_nav li:hover{
	background: green;
}
</style>