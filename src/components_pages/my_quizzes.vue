<template>
    <div class="d-flex flex-column" v-bind:class="{mostrar:mostrar, esconder:!mostrar}">
        <div class="d-flex align-items-center mb-2">
            <h1 class="titleG text_rosa">|</h1>
            <h1 class="titleM mt-2">Meus Quizzes</h1>
        </div>
        <div class="d-flex align-items-center">
            <button id="btn_volta" v-on:click="voltar" class="btnred tamainho bg-dark py-3 px-4">Voltar</button>
            <div class="d-flex flex-column">
                <div class="mb-5">
                    <Picker/>
                </div>
                <Inputs altura="57px" largura="600px"/>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center flex-column">
            <Quizzes/>
        </div>
    </div>
</template>

<script>

import Inputs from '../components/inputs'
import Quizzes from '../components/quizzes'
import Picker from '../components/pickers'
//import Topicos from '../components/topicos.vue'

import router from '@/router'

export default{
    data(){
        return{
            mostrar:false,
        }
    },
    components:{
        Inputs,
        Quizzes,
        //Topicos,
        Picker,
    },
    methods:{
        voltar(){
            router.push({name:'Quiz_initial'})
        }
    },
    created(){
        setTimeout(()=>{
            this.mostrar=!this.mostrar
        }, 50)
    }
}

</script>

<style>

.tamainho{
    font-size: 15px !important;
}

#btn_volta{
    margin-right:14%;
    margin-left: 8%;
}

</style>