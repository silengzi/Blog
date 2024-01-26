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
    async getAllArticle({commit, state}) {
      let result = await reqAllArticle()
      // console.log(result)
      let res = result.data
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

