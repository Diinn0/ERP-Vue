<script setup>
import { ref, computed } from 'vue'
import Models from "@/components/Models/Models.vue";
import Stocks from "@/components/Stocks/Stocks.vue";
import Orders from "@/components/Orders/Orders.vue";
import AddModel from "@/components/addModel/AddModel.vue";
import Simulator from "@/components/Simulator/Simulator.vue";

const routes = {
  '/': Models,
  '/addModel' : AddModel,
  '/stocks': Stocks,
  '/orders': Orders,
  '/simulator': Simulator
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
  <a href="#/">Modèles</a> |
  <a href="#/stocks">Stocks</a> |
  <a href="#/orders">Commandes</a> |
  <a href="#/simulator">Simulation</a>
  <component :is="currentView" />
</template>

<style scoped>
a {
  color: white;
}
</style>
