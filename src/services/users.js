import { http } from './config'

export default {
    listar: () =>{
        return http.get('users/')
    },

    logar:(dados) =>{
        return http.post('users/sign-in/', dados)
    }
}