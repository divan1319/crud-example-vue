import { defineStore } from "pinia"
import { computed, ref } from "vue"

import { products as ProductData} from "@/data/products"

export const useProductStore = defineStore('products', ()=> {
    const products = ref(ProductData)

    const hasProducts = computed(()=>products)

    function addProduct(data){
        products.value.push(data)
    }

    function delProduct(id){
        products.value = products.value.filter(p=> p.id !== id)
    }
    return { products, hasProducts,addProduct,delProduct}
})