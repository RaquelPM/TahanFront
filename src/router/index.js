import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'

import Admin from '../views/Admin.vue'

import quiz_titulo from '../components/insertit'
import quiz_initial from '../components_pages/quiz_initial'
import quiz_mater from '../components/mater'
import quiz_description from '../components_pages/description'
import estrut_q from '../components_pages/estrut_q'

import topico_initial from '../components_pages/topico_initial'
import topico_mater from '../components/mater'
import topico_titulo from '../components/insertit'
import topico_subtitulo from '../components_pages/insersub'

import my_quizzes from '../components_pages/my_quizzes'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/inicio',
      name: 'Inicio',
      component: Inicio,
      meta:{
        requeresAuth: false
      },
      children: [
        {
          path: '/Quiz',
          name: 'Quiz_initial',
          component: quiz_initial,
        },
        {
          path:'/Quiz/materia',
          name:'Quiz_materia',
          component: quiz_mater,
        },
        {
          path:'/Quiz/titulo',
          name:'Quiz_title',
          component: quiz_titulo
        },
        {
          path:'/Quiz/descrição',
          name:'Quiz_description',
          component: quiz_description
        },
        {
          path:'/Quiz/questões',
          name:'Numero_questões',
          component: estrut_q
        },
        {
          path:'/Tópicos',
          name: 'Topicos_initial',
          component: topico_initial,
        },
        {
          path: '/Tópicos/materia',
          name: 'Topicos_materia',
          component: topico_mater,
        },
        {
          path: '/Tópicos/titulo',
          name: 'Topicos_titulo',
          component: topico_titulo,
        },
        {
          path: '/Tópicos/subtitulo',
          name: 'Topicos_subtitulo',
          component: topico_subtitulo,
        },
        {
          path:'/Quizzes',
          name:'Meus_quizzes',
          component: my_quizzes
        },
        {
          path: '/Admin',
          name: 'Admin',
          component: Admin,
        },
      ]
    },
  ]
})

router.beforeEach((to,from,next) => {
  const token = localStorage.getItem('jwt');
  const requeresAuth = to.matched.some(record => record.meta.requeresAuth);

  if (requeresAuth){
      if (!token){
          next('/');
      }
      else{
          next();
      }
  }
  else{
    if(token){
      next('/Admin');
    }
    else{
      next();
    } 
  }
})


export default router
