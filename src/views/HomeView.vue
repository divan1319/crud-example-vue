<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import Message from 'primevue/message';
import { watchEffect } from 'vue';

import { onMounted,reactive } from 'vue';

const formState = reactive({
  user:'',
  pass:'',
  error:false
})
const auth = useAuthStore().isAuth

const onSubmit = ()=>{
  const data = {
    username:formState.user,
    pass:formState.pass
  }
  const auth = useAuthStore().login(data)

  if(auth){
    formState.error = true
  }else{
    router.replace({name:'panel'})
  }
}
onMounted(()=>{
if(auth) router.push({name:'panel'})
})

watchEffect(()=>{
  if(formState.error){
    setTimeout(() => {
      formState.error = false
    }, 3000);
  }
})
</script>

<template>
  <form class="max-w-sm mx-auto h-screen p-1">
    <div class="mt-60">
    <div class="mb-5">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
        >Usuario</label
      >
      <input
      v-model="formState.user"
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="usuario2024"
      />
    </div>
    <div class="mb-5">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
        >Contraseña</label
      >
      <input
      v-model="formState.pass"
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <Message v-if="formState.error" severity="error">Credenciales Incorrectas</Message>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click.prevent="onSubmit"
    >
      Entrar
    </button>
  </div>
  </form>
</template>
