<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

#app{
  height:100vh;
  weight:100vw;
}

.titleG{
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  font-family: 'Roboto Slab';
  line-height: 65px;
  font-size:60px;
  color:#2E2E2E;
}

.bordinha{
  height:30px;
  background: #FF3358;
}

.title{
  font-family: 'Roboto Slab';
  font-size:30px;
  cursor:pointer;
  text-decoration: underline  solid #FF3358;
}

.subtitle{
  font-family: 'Roboto Slab';
  font-size:21px;
  cursor:pointer;
}

.cinza{
  background:#2E2E2E;
}

.preto{
   background:#000000;
}

.inteira{
    height:70vh
}

.sublinhar{
    width: 250px;
    border-style:solid;
    border-top-width: 0;
    border-right-width: 0;
    border-left-width: 0;
    border-bottom-width: 4px;
    border-color: #FF3358;
}

.btnred{
  border:none;
  font-size:20px;
  font-family:'Roboto Slab';
  color:white;
  background: #FF3358;
  box-shadow: 0px 6.19048px 6.19048px rgba(0, 0, 0, 0.25);
  border-radius: 6.56394px;
  outline: none !important;
}

.bordas_lr{
    border-style:solid;
    border-top-width: 0;
    border-right-width: 2px;
    border-left-width: 2px;
    border-bottom-width: 0;
    border-color: #FF3358;
}

.mostrar{
    transition: opacity 0.5s;
    overflow: hidden;
    opacity: 1;
}

.esconder{
    transition: opacity 0.5s;
    overflow: hidden;
    opacity: 0;
}

.abrir{
    transition: max-width 1s;
    overflow:hidden;
    max-width: 800px;
}

.fechar{
    transition: max-width 1s;
    overflow:hidden;
    max-width:0px;
    max-height: 200px;
}

</style>
