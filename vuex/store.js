import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: { count: 8 },
  mutations: {
    showCount:(state)=>{alert(state.count)}
  },
  getters: {
    doubleCount:state=>state.count*2
  }
})
export default store
