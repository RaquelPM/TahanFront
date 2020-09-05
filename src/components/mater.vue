<template>
    <div class=" d-flex justify-content-center align-items-center inteira">
        <div id="div_mater" v-bind:class="{abrir:mostrar, fechar:!mostrar}" class="d-flex justify-content-center align-items-center flex-column px-5 bordas_lr">
            <h1 v-bind:class="{mostrar:t, esconder:!t}" class="titleG">Matéria do</h1>
            <h1 v-if="what=='/Quiz/materia'" v-bind:class="{mostrar:t, esconder:!t}" class="titleG" >Quiz</h1>
            <h1 v-else v-bind:class="{mostrar:t, esconder:!t}" class="titleG" >Tópico</h1>
            <selectper />
            <div class="d-flex mt-5">
                <button id="btn_voltar" v-on:click="direcionar_inital" class=" py-2 px-4 btnred bg-dark" >Voltar</button>
                <button class=" py-2 px-4 btnred" v-on:click="direcionar_title" >Próximo</button>
            </div>
        </div>
    </div>
</template>

<script>

import router from "@/router"
import selectper from "@/components/select_per"

export default{
    components:{
        selectper,
    },
    data(){
        return{
            mostrar:false,
            t:false,
            what: this.$route.path,
        }
    },
    methods:{
        direcionar_inital(){
            if(this.what=="/Quiz/materia"){
                this.t = !this.t;
                setTimeout(()=>{
                    this.mostrar = !this.mostrar;
                }, 200)
                setTimeout(()=>{
                    router.push({name:'Quiz_initial'});
                },700)
            }
            else{
                this.t = !this.t;
                setTimeout(()=>{
                    this.mostrar = !this.mostrar;
                }, 200)
                setTimeout(()=>{
                    router.push({name:'Topicos_initial'});
                },700)
            }
        },
        direcionar_title(){
            if(this.what=="/Quiz/materia"){
                 this.t=!this.t;
                setTimeout(()=>{
                    this.mostrar = !this.mostrar;
                }, 300)
                setTimeout(()=>{
                    router.push({name:'Quiz_title'});
                },700)
            }
            else{
                 this.t=!this.t;
                setTimeout(()=>{
                    this.mostrar = !this.mostrar;
                }, 200)
                setTimeout(()=>{
                    router.push({name:'Topicos_titulo'});
                },700)
            }
        }
    },
    created(){
        setTimeout(()=>{
            this.mostrar=!this.mostrar;
        },10)
         setTimeout(()=>{
            this.t=!this.t;
        },580)
    },
}

</script>

<style scope>

#btn_voltar{
    margin-right:420px;
}


</style>