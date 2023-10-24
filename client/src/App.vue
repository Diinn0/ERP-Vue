<script setup>
import { ref, computed } from 'vue'
import Models from "@/components/Models/Models.vue";
import Stocks from "@/components/Stocks/Stocks.vue";

const routes = {
  '/': Models,
  '/about': Stocks
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
  <Models/>
</template>

<style scoped>

</style>
