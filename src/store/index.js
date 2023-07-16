import { createStore } from 'vuex'

export default createStore({
  state: {
    navOnOff: true
  },
  getters: {
  },
  mutations: {
    navOnOff: (state, value) => (state.navOnOff = value)
  },
  actions: {
  
    navOnOff({commit},value){
      commit("navOnOff", value);
    },
  },
  modules: {
  }
})
