import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'
import Quiz from '../views/Quiz.vue'
import Topicos from '../views/Tópicos.vue'
import Admin from '../views/Admin.vue'

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
          path: '/Quizzes',
          name: 'Quiz',
          component: Quiz,
        },
        {
          path: '/Tópicos',
          name: 'Topicos',
          component: Topicos,
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
      next('/inicio');
    }
    else{
      next();
    } 
  }
})


export default router
