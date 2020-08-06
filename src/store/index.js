import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    access_token: '',
    name:'',
    img_url:'',
  },
  mutations: {
    setAccess(state,payload){
      state.access_token = payload;
    },
    setName(state,payload){
      state.name = payload;
    },
    setImg(state,payload){
      state.img_url = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})

export default store
