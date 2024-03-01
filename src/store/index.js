import Vue from 'vue'
import Vuex from 'vuex'
import {reqAllArticle} from '@/api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allArticle: [],
  },
  mutations: {
    GETALLARTICLE(state, article){
      state.allArticle = article
      // console.log(state.allArticle)
    }
  },
  actions: {
    async getAllArticle({commit, state}, route) {
      
      let data = {
        userName: route.query.userName
      }
      let result = await reqAllArticle(data)
      let res = result.data
      // console.log(res)
      if(res.status == 1) {
        commit('GETALLARTICLE', res.data)
      }
    }
  },
  getters: {
  },
  modules: {
    
  }
})

