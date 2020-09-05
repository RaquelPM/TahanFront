<template>
    <div v-bind:style="tamanhos" id="input_div" class="d-flex justify-content-center align-items-center">
        <textarea v-if="what=='/Quiz/titulo'" v-model="titulo_q" wrap="hard" id="input_input" class="w-100 h-75 mx-2 pl-2 pt-2"/>
        <textarea v-else-if="what=='/Quiz/descrição'" v-model="texto_q" wrap="hard" id="input_input" class="w-100 h-75 mx-2 pl-2 pt-2"/>
        <textarea v-else-if="what=='/Tópicos/titulo'" v-model="titulo_t" wrap="hard" id="input_input" class="w-100 h-75 mx-2 pl-2 pt-2"/>
        <textarea v-else-if="what=='/Tópicos/subtitulo'" v-model="texto_t" wrap="hard" id="input_input" class="w-100 h-75 mx-2 pl-2 pt-2"/>
        <textarea v-else wrap="hard" id="input_input" class="w-100 h-75 mx-2 pl-2 pt-2"/>
    </div>
</template>

<script>


export default{
    props:{
        altura: String,
        largura: String,
    },
    data(){
        return{
            tamanhos:{
                height: this.altura,
                width: this.largura,
            },
           titulo_q:this.$store.state.data_quiz.title,
           texto_q:this.$store.state.data_quiz.description,
           titulo_t:this.$store.state.data_topicos.title,
           texto_t:this.$store.state.data_topicos.subtitle,
           what: this.$route.path,
        }
    },
    beforeDestroy(){
        if(this.what=="/Quiz/titulo"){
            this.$store.dispatch('att_title_q', this.titulo_q)
        }
        else if(this.what=="/Quiz/descrição"){
            this.$store.dispatch('att_description_q', this.texto_q)
        }
        else if(this.what=="/Tópicos/titulo"){
            this.$store.dispatch('att_title_t', this.titulo_t)
        }
        else if(this.what=="/Tópicos/subtitulo"){
            this.$store.dispatch('att_subtitle_t', this.texto_t)
        }
    }
}

</script>

<style>

#input_div{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 2px;
    border-style: solid;
    border-color: #FF3358;
}

#input_input{
    border-style: none;
    background: #EAE8E8;
    border-radius: 7px;
    outline: none;
}

</style>