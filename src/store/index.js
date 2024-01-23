import Vue from 'vue'
import Vuex from 'vuex'
import {reqAllArticle} from '@/api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allArticle: [],
    count: 10
  },
  getters: {
  },
  mutations: {
    GETALLARTICLE(state, article){
      state.allArticle = article
    }
  },
  actions: {
    async getAllArticle({commit, state}) {
      let result = await reqAllArticle()
      console.log('result')
      if(result.code == 200) {
        commit('GETALLARTICLE', result.data)
      }
    }
  },
  modules: {
    
  }
})
