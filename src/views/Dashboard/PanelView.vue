<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { onMounted, ref } from "vue";
import Button from "primevue/button";
/*;
import MenuComponent from "@/components/MenuComponent.vue";
import Rating from "primevue/rating";
import Tag from "primevue/tag";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row"; // optional*/
import { products as ProductData } from "@/data/products";
import { useProductStore } from "@/stores/products";
import { getProducts,deleteProduct } from "@/services/create-user";

const products = ref(useProductStore().hasProducts);
const deletingProduct = (id)=>{
  deleteProduct(id)
  getProducts().then(res=>{
    console.log(res)
    useProductStore().gettingProducts(res)
  })
}
onMounted(()=>{
  getProducts().then(res=>{
    console.log(res)
    useProductStore().gettingProducts(res)
  })
})
</script>
<template>
  <div class="max-w-7xl mx-auto py-5 h-screen">
    <div class="card mt-5">
      <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column field="id" header="Id"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="price" header="Precio"></Column>
        <Column field="amount" header="Cantidad"></Column>
        <Column header="Accion">
          <template #body="slotProps">
            <div class="flex flex-col md:flex-row gap-2">
              <Button type="button" label="Eliminar" severity="danger" @click="deletingProduct(slotProps.data.id)" />
              <Button type="button" label="Editar" severity="warning" />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
