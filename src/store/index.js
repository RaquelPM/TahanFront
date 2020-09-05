import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data_quiz:{
      mater: '',
      title: '',
      description: '',
    },
    data_topicos:{
      mater:'',
      title:'',
      subtitle:'',
    }
  },
  mutations: {
    att_mater_q: (state, data) =>{
      state.data_quiz.mater = data;
    },
    att_title_q: (state, data) =>{
      state.data_quiz.title = data;
    },
    att_description_q:(state, data)=>{
      state.data_quiz.description = data;
    },
    att_mater_t: (state, data) =>{
      state.data_topicos.mater = data;
    },
    att_title_t: (state, data) =>{
      state.data_topicos.title = data;
    },
    att_subtitle_t:(state, data)=>{
      state.data_topicos.subtitle = data;
    }
  },
  actions: {
    att_mater_q:(context, data) =>{
      context.commit('att_mater_q', data);
    },
    att_title_q: (context, data) =>{
      context.commit('att_title_q', data);
    },
    att_description_q:(context, data) =>{
      context.commit('att_description_q', data);
    },
    att_mater_t:(context, data) =>{
      context.commit('att_mater_t', data);
    },
    att_title_t: (context, data) =>{
      context.commit('att_title_t', data);
    },
    att_subtitle_t:(context, data) =>{
      context.commit('att_subtitle_t', data);
    }
  },
  modules: {
  }
})

export default store
