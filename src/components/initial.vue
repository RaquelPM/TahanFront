<template>
    <div v-bind:class="{mostrar:mostrar, esconder: !mostrar}" class="d-flex justify-content-center align-items-center inteira flex-column">
        <div id="sublinhar" class="d-flex justify-content-center align-items-center sublinhar" >
            <h1 v-if="what=='/Quiz'" class="titleG">Quiz</h1>
            <h1 v-else class="titleG">Tópico</h1>
        </div>
        <div v-if="what=='/Quiz'" class="d-flex mt-5">
            <button class="mr-5 py-2 px-4 btnred" v-on:click="direcionar_meus_q">Meus quizzes</button>
            <button class="ml-4 py-2 px-4 btnred" v-on:click="direcionar_mater_q">Criar novo quiz</button>
        </div>
        <div v-else class="d-flex mt-5">
            <button class="mr-5 py-2 px-4 btnred" v-on:click="direcionar_meus_t">Meus tópicos</button>
            <button class="ml-4 py-2 px-4 btnred" v-on:click="direcionar_mater_t" >Criar novo tópico</button>
        </div>
    </div>
</template>

<script>
import router from '@/router'

export default{
   data(){
       return{
           what: this.$route.path,
           mostrar: false,
       }
   },
    methods:{
        direcionar_mater_q(){
            router.push({ name: 'Quiz_materia'})
        },
        direcionar_mater_t(){
            router.push({ name: 'Topicos_materia'})
        },
        direcionar_meus_q(){
            router.push({ name: 'Meus_quizzes'})
        },
    },
    created(){
        setTimeout(() =>{
            this.mostrar = !this.mostrar
        }, 50)
    }
}

</script>