import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: {}
  },
  mutations: {
    update (state, searchResults) {
      state.searchResults = searchResults
    }
  }
})
