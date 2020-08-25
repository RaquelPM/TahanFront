<template>
    <div class="d-flex h-75 mb-1 mr-5">
        <div id="p_div" class="d-flex justify-content-center preto h-100 align-items-center">
            <a class="subtitle text-white">Perfil</a>
        </div>
        <div id="f_div" class="d-flex cinza justify-content-center align-items-center h-100 py-2 px-2">
            <a id="username" class="text-white mr-2 ml-3 py-1">{{name}}</a>
            <img id="img_perfil" :src="picture" alt="foto de perfil" class="mr-2"/>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            picture: localStorage.getItem('img_url'),
            name: localStorage.getItem('name'),
        }
    },
}

</script>

<style>
#f_div{
    border-bottom-right-radius:6px;
    border-top-right-radius:6px;
}
#p_div{
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    width: 85px;
}
#username{
    cursor:pointer;
    font-size: 12px;
    font-family: 'Roboto Slab'
}
#img_perfil{
    border-radius:30px;
    height:40px;
}
</style>