<script setup>
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Message from 'primevue/message';
import { reactive,watchEffect,ref} from 'vue';
import { useProductStore } from '@/stores/products';


const props = defineProps(['visible'])
const emit = defineEmits(['close'])

const formState = reactive({
    id:null,
    name:'',
    price:0,
    amount:0,
    error:false
})

const actionModal = ()=>{
    emit('close')
}

const onSubmit = ()=>{
    if(formState.name == '' || formState.price == 0 || formState.amount == 0) return formState.error = true
    
    const data = {
        id:formState.id,
        name:formState.name,
        price:formState.price,
        amount:formState.amount
    }

    const add = useProductStore().addProduct(data)
    cleanInputs()
    actionModal()
}

const cleanInputs = ()=>{
    formState.name = ''
    formState.price = 0
    formState.amount = 0
}

watchEffect(()=>{
    if(formState.error){
        setTimeout(() => {
            formState.error = false
        }, 5000);
    }
})

watchEffect(()=>{
    const lastId = useProductStore().products[useProductStore().products.length - 1].id
    formState.id = lastId + 1   
})
</script>
<template>
  <div class="card flex justify-center">
    <Dialog
      modal
      header="Agregar Producto"
      :closable="false"
      :style="{ width: '25rem' }"
      v-model:visible="props.visible"
    >
      <span class="text-surface-600 dark:text-surface-0/70 block mb-5"
        >Complete la información solicitada</span
      >
      <div class="flex items-center gap-3 mb-3">
        <label for="nombre" class="font-semibold w-[6rem]">Nombre</label>
        <InputText v-model="formState.name" id="nombre" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-3 mb-5">
        <label for="minmaxfraction" class="font-semibold w-[6rem]">Precio</label>
        <InputNumber v-model="formState.price" class="flex-auto" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" />
      </div>
      <div class="flex items-center gap-3 mb-5">
        <label for="integer" class="font-semibold w-[6rem]">Cantidad</label>
        <InputNumber v-model="formState.amount" inputId="integer"  id="cantidad" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-3 mb-5">
        <Message v-if="formState.error" severity="error">Debe de llenar todos los datos correctamente</Message>
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          severity="secondary"
          @click="actionModal"
        ></Button>
        <Button type="button" label="Guardar" @click="onSubmit"></Button>
      </div>
    </Dialog>
  </div>
</template>
