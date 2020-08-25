import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'

import Admin from '../views/Admin.vue'

import quiz_titulo from '../components_pages/quiz_titulo.vue'
import quiz_initial from '../components_pages/quiz_initial'
import quiz_mater from '../components_pages/quiz_mater'
import quiz_description from '../components_pages/quiz_description'

import topico_initial from '../components_pages/topico_initial'
import topico_mater from '../components_pages/topicos_mater'
import topico_titulo from '../components_pages/topicos_titulo'
import topico_description from '../components_pages/topicos_description'

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
          path: '/Tópicos',
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
          path: '/Tópicos/descrição',
          name: 'Topicos_description',
          component: topico_description,
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
