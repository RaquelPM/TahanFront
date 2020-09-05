<template>
    <div class="d-flex justify-content-center align-items-center inteira">
        <div id="div_sub" v-bind:class="{abrir:mostrar, fechar:!mostrar}" class="bordas_lr px-5 d-flex align-items-center">
            <div v-bind:class="{mostrar:a, esconder:!a}" class="d-flex justify-content-center align-items-center flex-column">
                <h1 class="titleG mb-4">Subtítulo</h1>
                <Inputs altura="57px" largura="420px"/>
                <div class="d-flex mt-5">
                    <button id="btn_voltar" v-on:click="direcionar_title" class=" py-2 px-4 btnred bg-dark" >Voltar</button>
                    <button class=" py-2 px-4 btnred" >Próximo</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Inputs from '@/components/inputs.vue'

import router from '@/router'

export default{
    components:{
        Inputs,
    },
    data(){
        return{
            mostrar: false,
            what: this.$route.path,
            a: false,
        }
    },
    methods:{
        direcionar_title(){
            setTimeout(()=>{
            this.a=!this.a;
            },100)
             setTimeout(()=>{
            this.mostrar = !this.mostrar;
            }, 300)
            setTimeout(()=>{
                router.push({name:'Topicos_titulo'});
            },700)
        },
    },
    created(){
         setTimeout(()=>{
            this.mostrar=!this.mostrar;
        },10)
         setTimeout(()=>{
            this.a=!this.a;
        },580)
    }
}

</script>
