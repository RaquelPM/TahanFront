<template>
    <div v-bind:style="tamanhos" id="input_div" class="d-flex justify-content-center align-items-center">
        <textarea wrap="hard" id="input_input" class="w-100 h-75 mx-2 pl-2 pt-2"/>
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
            }
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