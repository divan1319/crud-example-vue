<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuComponent from './components/MenuComponent.vue';
import {useAuthStore} from '@/stores/auth'

const store = useAuthStore()
</script>

<template>
  <main class="dark:bg-surface-900 min-h-max p-1">
    <MenuComponent v-if="store.isAuth" />
    <RouterView />
  </main>
</template>

