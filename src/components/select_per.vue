<template>
    <div>
        <div id="btn_seta" v-on:click="abrirr" class="rosa d-flex justify-content-center align-items-center mt-5">
            <font-awesome-icon v-if="this.escolhida=='' && !abrir" icon="angle-down" class="text-white" size="2x" />
            <font-awesome-icon v-if="this.escolhida=='' && abrir" icon="angle-up" class="text-white" size="2x" />
            <p v-else class="text-white subtitle mt-3" >{{escolhida}}</p>
        </div>
        <div v-bind:class="{sumiu:!abrir, surgiu:abrir}" v-on:click="abrirr" id="div_modal" class="d-flex justify-content-center align-items-center rosa flex-column" >
            <div v-for="materia in materias" :key="materia">
                <button id="materias" v-on:click="att_mater(materia)" class="rosa text-white subtitle">{{materia}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                abrir:false,
                materias:[
                    'Matemática',
                    'Português',
                    'Biologia',
                    'Física',
                    'Inglês',
                    'Artes',
                ],
                escolhida:this.$store.state.data_quiz.mater,
                what: this.$route.path,
            }
        },
        methods:{
            abrirr(){
                this.abrir=!this.abrir;
            },
            att_mater: function(materia){
                if(this.what=='/Quiz/materia'){
                    this.$store.dispatch('att_mater_q', materia)
                    this.escolhida=materia;
                }
                else{
                    this.$store.dispatch('att_mater_t', materia)
                    this.escolhida=materia;
                }
            }
        }
    }
</script>

<style>

#btn_seta{
    width: 306px;
    height: 45px;
    box-shadow: 0px 6.19048px 6.19048px rgba(0, 0, 0, 0.25);
    border-radius: 6.56394px;
}

#div_modal{
    width: 306px;
    border-radius: 6.56394px;
}

#materias{
    outline:none;
    border: 0px;
    width: 306px;
    height: 54px;
    box-shadow: 0px 6.19048px 6.19048px 6.19048px rgba(0, 0, 0, 0.25);
    border-radius: 6.56394px;
}

.sumiu{
    transition: height 0.8s;
    height: 0px;
    overflow:hidden;
}

.surgiu{
    transition: height 0.8s;
    height: 320px;
    overflow:hidden;
}
</style>