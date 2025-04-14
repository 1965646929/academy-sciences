import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    count:0
  },
  actions:{
    increment({commit}){
      commit('increment')
    }
  },
  mutations:{
    increment(state){
      state.count++
    }
  },
  getters:{
    count:state=>state.count
  }
})