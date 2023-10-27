<script setup>
import {ref} from "vue";
import Order from '../database/model/Order'

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const data = ref([
  new Order(0, "Vélo A", 10, 5, 5),
  new Order(1, "Vélo VTT", 150, 10, 140),
  new Order(2, "Vélo BAP", 60, 40, 20)
]);

</script>

<template>
  <div style="display: flex; flex-direction: column; justify-content: space-evenly; padding: 2em">
    <div style="display: flex; flex-direction: row; flex: auto">
      <h2 style="flex: 1">Préparation d'une commande</h2>
      <button>Commander</button>
    </div>

    <table id="customers" style="flex: 1; margin-top: 3em">
      <thead>
      <tr>
        <th>ID</th>
        <th>Nom du modèle</th>
        <th>Quantité demandée</th>
        <th>Quantité actuel</th>
        <th>Quantité restante</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data">
        <td>{{ item.id}}</td>
        <td>{{ item.nom }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.current_quantity }}</td>
        <td>{{ item.needed_quantity }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}

#customers > thead tbody {
  flex: auto;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #3E6259;}
#customers tr:nth-child(odd){background-color: #5B8266;}

#customers tr:hover {background-color: rgba(221, 221, 221, 0.7);}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>