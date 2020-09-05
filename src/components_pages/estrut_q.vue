<template>
    <div class="inteira d-flex justify-content-center align-items-center flex-column">
        <div id="div_titulo_q" v-bind:class="{abrir:bordas, fechar:!bordas}" class="bordas_lr mb-5" >
            <div class="d-flex justify-content-center align-items-center flex-column"  v-bind:class="{mostrar:mostrar, esconder:!mostrar}">
                <p class="titleM pb-3">Estrutura e</p>
                <p class="titleM">Questões</p>
            </div>
        </div>
        <div v-bind:class="{mostrar:mostrar, esconder:!mostrar}" class="justify-content-center align-items-center d-flex mt-3">
            <p id="titi" class="title" >Número de questões</p>
        </div>
        <div v-bind:class="{mostrar:mostrar, esconder:!mostrar}" class="d-flex mt-3 ml-4">
            <div v-for="n in quantidade" :key="n">
                <button id="bubu" v-on:click="btn" class="btncinza mr-5">{{n}}</button>
            </div>
        </div>
        <div v-bind:class="{mostrar:mostrar, esconder:!mostrar}" class="d-flex mt-5">
                <button id="volvol" class=" py-2 px-4 btnred bg-dark" v-on:click="voltar" >Voltar</button>
                <button class=" py-2 px-3 btnred" >Confirmar</button>
        </div>
    </div>
</template>

<script>

import router from '@/router'

export default{
    data(){
        return{
            bordas: false,
            mostrar: false,
            quantidade:[
                '5',
                '10',
                '15',
                '20',
            ]
        }
    },
    methods:{
        voltar(){
            router.push({name: 'Quiz_description'})
        },
        btn(){
            this.bt = !this.bt;
        },
    },
    created(){
        setTimeout(()=>{
            this.bordas=!this.bordas;
        }, 100)
        setTimeout(()=>{
            this.mostrar=!this.mostrar;
        }, 350)
    }
}

</script>

<style scope>

#div_titulo_q{
    width: 286px !important;
    height: 100px !important;
}

.titleM{
    line-height: 30px;
}

#titi{
    text-decoration: none;
}

#bubu{
    font-size:30px;
    width: 106px;
    height: 53px;
}

#volvol{
    margin-right:170px;
}

</style>