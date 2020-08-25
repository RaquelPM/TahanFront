<template>
  <div id="navbar" class="d-flex w-100 mt-4">
    <div class="w-50 py-1 d-flex justify-content-start align-items-center mt-1">
      <p v-bind:class="{title:atual.quizzes, disable:!atual.quizzes}" class="pl-5 pr-2" v-on:click="direcionar_q" >Quiz</p>
      <p class="disable pr-4" >|</p>
      <p v-bind:class="{title:atual.topicos, disable:!atual.topicos}" class="pl-5 pr-2" v-on:click="direcionar_t">Tópico</p>
       <p class="disable pr-4" >|</p>
      <p v-bind:class="{title:atual.admin, disable:!atual.admin}" class="pl-5 pr-2" v-on:click="direcionar_a">Início</p>
       <p class="disable" >|</p>
    </div>
    <div class="w-50 d-flex justify-content-end">
      <Button/>
    </div>
  </div>
</template>

<script>

import router from '@/router'
import Button from './button.vue'

export default {
  data(){
    return {
      atual:{
        admin:true,
        quizzes:false,
        topicos:false,
      }
    }
  },
  components:{
    Button,
  },
  methods:{
    direcionar_q(){
      router.push({name:'Quiz_initial'})
      this.atual.admin=false
      this.atual.quizzes=true
      this.atual.topicos=false
    },
    direcionar_t(){
      router.push({name:'Topicos_initial'})
      this.atual.admin=false
      this.atual.quizzes=false
      this.atual.topicos=true
    },
    direcionar_a(){
      router.push({name:'Admin'})
      this.atual.admin=true
      this.atual.quizzes=false
      this.atual.topicos=false
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.disable{
  cursor:pointer;
  font-family: 'Roboto Slab';
  font-size:30px;
  color:#DCDADA
}
</style>
