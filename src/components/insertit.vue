<template>
    <div class="d-flex justify-content-center align-items-center inteira">
        <div v-bind:class="{abrir:mostrar, fechar:!mostrar}" class="bordas_lr px-5 d-flex align-items-center">
            <div v-bind:class="{mostrar:a, esconder:!a}" class="d-flex justify-content-center align-items-center flex-column">
                <h1 class="titleG">Insira o título do</h1>
                <h1 v-if="what=='/Quiz/titulo'" class="titleG pb-2">seu quiz</h1>
                <h1 v-else class="titleG pb-2">seu tópico</h1>
                <Inputs altura="57px" largura="420px"/>
                <div class="d-flex mt-5">
                    <button id="btn_voltar" v-on:click="direcionar_mater" class=" py-2 px-4 btnred bg-dark" >Voltar</button>
                    <button class=" py-2 px-4 btnred" v-on:click="direcionar_description" >Próximo</button>
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
        direcionar_mater(){
            if(this.what=="/Quiz/titulo"){
                 setTimeout(()=>{
                this.a=!this.a;
                },100)
                 setTimeout(()=>{
                this.mostrar = !this.mostrar;
                }, 300)
                setTimeout(()=>{
                    router.push({name:'Quiz_materia'});
                },700)
            }
            else{
                  setTimeout(()=>{
                this.a=!this.a;
                },100)
                 setTimeout(()=>{
                this.mostrar = !this.mostrar;
                }, 300)
                setTimeout(()=>{
                    router.push({name:'Topicos_materia'});
                },700)
            }
        },
        direcionar_description(){
            if(this.what=="/Quiz/titulo"){
                  setTimeout(()=>{
                this.a=!this.a;
                },100)
                 setTimeout(()=>{
                this.mostrar = !this.mostrar;
                }, 300)
                setTimeout(()=>{
                    router.push({name:'Quiz_description'});
                },700)
            }
            else{
                 setTimeout(()=>{
                this.a=!this.a;
                },100)
                 setTimeout(()=>{
                this.mostrar = !this.mostrar;
                }, 300)
                setTimeout(()=>{
                    router.push({name:'Topicos_subtitulo'});
                },700)
            }
        }
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
