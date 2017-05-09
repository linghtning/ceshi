<template>
  <div id="app">
    <router-view class="top" name="top"></router-view>
    <div id="li_main">
    	<router-view class="main" name="main"></router-view>
    </div>
    <router-view class="bottom" name="bottom"></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
	#li_main{
		margin-top: 3.5rem;
	}
</style>
