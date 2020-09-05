<template>
    <div class="retangulo bg-dark mt-4 d-flex">
        <div id="div_img">
        </div>
        <div class="d-flex flex-column w-100">
            <p class="text-white subtitle mt-2 ml-3" >Exemplo</p>
            <div class="d-flex align-items-end justify-content-center">
                <font-awesome-icon icon="heart" class="text-danger icon mr-3" size="lg"/>
                <p class="text-white subtitle ">Curtidas:</p>
                <p class="text-white ml-2 mr-5 subtitle">3k</p>
                <font-awesome-icon icon="comment-alt" class="text-white icon mr-3 ml-5" size="lg"/>
                <p class="text-white subtitle">Comentários:</p>
                <p class="text-white ml-2 subtitle mr-5">2</p>

                <button class="btnred tamainho bg-success py-3 px-4 diminuir_borda mb-2 ml-5" >Editar</button>
            </div>
        </div>
    </div>
</template>

<style>

#div_img{
    width: 200px;
    height: 134px;
    background: #393737;
    border-top-left-radius:10.1724px;
    border-bottom-left-radius:10.1724px;
}

</style>