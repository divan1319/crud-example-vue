import { defineStore } from "pinia"
import { computed, ref } from "vue"


export const useProductStore = defineStore('products', ()=> {

    const products = ref([])

    const hasProducts = computed(()=>products)


    function delProduct(id){
        products.value = products.value.filter(p=> p.id !== id)
    }

    function gettingProducts(data) {
        products.value = data
    }
    

    
    return { products, hasProducts,delProduct,gettingProducts}
})