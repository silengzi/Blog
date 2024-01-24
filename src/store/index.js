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
      if(result.status == 200) {
        commit('GETALLARTICLE', result.data)
      }
    }
  },
  getters: {
  },
  modules: {
    
  }
})

