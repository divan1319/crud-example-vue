import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', ()=> {
    const isAuth = ref(true)
    const credetentials = {
        username:'admin',
        pass:'admin1234'
    }
    function login(data){
        if(data.username == credetentials.username && data.pass == credetentials.pass){
            isAuth.value = true
            return false
        }

        return true
    }

    function logout(){
        isAuth.value = false
    }
    return { isAuth,login,logout}
})