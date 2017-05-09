import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article/Article'
import Music from '@/components/Music/Music'
import Other from '@/components/Other/Other'
import Photo from '@/components/Photo/Photo'
import Home from '@/components/Home'
import Slider from '@/components/Slider'
import titleBar from '@/components/titleBar'
Vue.use(Router)
 
export default new Router({
	routes: [
		{
			path:'/',
			name:'home',
			components:{
				top:titleBar,
				main:Home,
				bottom:Slider
			}
		},
		{
			path:'/Music',
			name:'music',
			components:{
				top:titleBar,
				main:Music,
				bottom:Slider
			}
		},
		{
			path:'/Article',
			name:'music',
			components:{
				top:titleBar,
				main:Article,
				bottom:Slider
			}
		},
		{
			path:'/Photo',
			name:'music',
			components:{
				top:titleBar,
				main:Photo,
				bottom:Slider
			}
		},
		{
			path:'/Other',
			name:'music',
			components:{
				top:titleBar,
				main:Other,
				bottom:Slider
			}
		},
	]
})
