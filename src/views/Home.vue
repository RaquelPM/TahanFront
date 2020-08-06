<template>
  <div class="d-flex justify-content-center flex-column align-items-center h-100">
    <div class="w-100 bordinha fixed-top"></div>
    <img alt="logo" src="../assets/Group 41.png">
    <div class="d-flex mt-3 w-25 flex-column align-items-center">
      <p class="subtitulo normal">A plataforma de estudos</p>
      <div class="d-flex" >
        <p class="subtitulo mr-2 destaque">perfeita</p>
        <p class="subtitulo normal" >pra você.</p>
      </div>
    </div>
    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure" class="mt-4" ></GoogleLogin>
    <div class="w-100 bordinha fixed-bottom"></div>
  </div>
</template>

<script>

import GoogleLogin from 'vue-google-login'

import users from '@/services/users'
import router from '@/router'

export default {
  name: 'Home',
  data() {
            return {
                params: {
                    client_id: "590710664553-99u09rnf7t374mbkv36eo3qarb69uh5d.apps.googleusercontent.com"
                },
                renderParams: {
                    width: 250,
                    height: 40,
                    longtitle: true,
                },
                dados:{
                 "access_token": "",
                 "occupation": "teacher"
                },
            }
        },
  components: {
    GoogleLogin
  },
  methods: {
        onSuccess(googleUser) {
            this.dados.access_token = googleUser.wc.access_token;
            console.log(googleUser)
            localStorage.setItem('img_url', googleUser.Ot.eL)
            localStorage.setItem('name', googleUser.Ot.FW)
            users.logar(this.dados).then(resposta =>{
              console.log(resposta)
              localStorage.setItem('name', resposta.data.user.username)
              localStorage.setItem('img_url', resposta.data.user.image_url)
              localStorage.setItem('jwt', resposta.data.login_token)
              router.push({name:'Admin'})
            })
            .catch(router.push({name:'Admin'}));
        },
        onFailure(){
          alert('login_deu_merda')
        }
    },
  mounted(){
    users.listar().then(resposta => {
      console.log(resposta)
    })

  }
}
</script>

<style>

.subtitulo{
  font-weight: 300;
  font-size: 30px;
  line-height: 20px;
}

.normal{
  color: #362E2E;
}

.destaque{
  color: #FF3358;
}

</style>

