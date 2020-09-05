<template>
    <div class="d-flex justify-content-center align-items-center inteira">
        <div v-bind:class="{abrir:mostrar, fechar:!mostrar}" class="bordas_lr px-5">
            <div v-bind:class="{mostrar:a, esconder:!a}" class="d-flex justify-content-center align-items-center flex-column mt-3">
                <h1 class="titleG">Insira a descrição</h1>
                <h1 class="titleG pb-2 mb-3">do seu quiz</h1>
                <Inputs altura="98px" largura="420px"/>
                <div class="d-flex mt-5">
                    <button id="btn_voltar" v-on:click="direcionar_title" class=" py-2 px-4 btnred bg-dark" >Voltar</button>
                    <button class=" py-2 px-4 btnred" v-on:click="direcionar_proximo" >Próximo</button>
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
            a: false,
        }
    },
    methods:{
        direcionar_title(){
            this.a=!this.a
            setTimeout(()=>{
                this.mostrar = !this.mostrar;
            }, 200)
            setTimeout(()=>{
                router.push({name:'Quiz_title'});
            },700)
            
        },
        direcionar_proximo(){
            this.a=!this.a
            setTimeout(()=>{
                this.mostrar = !this.mostrar;
            }, 200)
            setTimeout(()=>{
                router.push({name:'Numero_questões'});
            },700)
        }
    },
    created(){
         setTimeout(()=>{
            this.mostrar=!this.mostrar;
        },10)
         setTimeout(()=>{
            this.a=!this.a;
        },650)
    }
}

</script>

