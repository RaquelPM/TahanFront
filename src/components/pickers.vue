<template>
    <div class="d-flex position-fixed">
        <div id="categoria" class="rosa d-flex justify-content-center align-items-center">
            <p class="text-white subtitle mt-3">Categoria:</p>
        </div>
        <div id="materia" v-bind:class="{normal:!descer, desceu:descer}" class="bg-dark">
            <p id="categorias" class="text-white subtitle d-flex justify-content-center mt-1" > {{escolhida}} </p>
            <div class="d-flex flex-column" v-for="categoria in categorias" :key="categoria" >
                <p id="categorias" v-on:click="change_categoria(categoria)" class="text-white subtitle d-flex justify-content-center" >{{categoria}}</p>
            </div>
        </div>
        <div id="setinha" v-on:click="descer=!descer" class="rosa d-flex justify-content-center align-items-center">
            <font-awesome-icon v-if="!descer" icon="angle-down" class="text-white mt-1" size="2x" />
            <font-awesome-icon v-else icon="angle-up" class="text-white mt-1" size="2x" />
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            descer:false,
            categorias:[
                'Matemática',
                'Português',
                'Biologia',
                'Física',
                'Inglês',
                'Artes',
            ],
            escolhida:'---',
        }
    },
    methods:{
        change_categoria: function(categoria){
            this.escolhida = categoria; 
            this.descer = false;
        }
    }
}
</script>

<style>
#categoria{
    width: 120.77px;
    height: 36px;
    border-top-left-radius: 8.12903px;
    border-bottom-left-radius: 8.12903px;
}

#categorias{
    width:155px;
    height:36px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom:10px;
}

#materiaa{
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#setinha{
    width: 49px;
    height: 36px;
    box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.25); 
    border-top-right-radius: 8.12903px;
    border-bottom-right-radius: 8.12903px;
}

.normal{
    transition: height 0.7s;
    height: 36px;
    overflow: hidden;
}

.desceu{
    transition: height 0.7s;
    height: 315px;
    overflow: hidden;
    border-bottom-left-radius: 8.12903px;
    border-bottom-right-radius: 8.12903px;
}

</style>