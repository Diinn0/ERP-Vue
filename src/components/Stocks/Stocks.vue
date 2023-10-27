<script setup>
import {ref} from "vue";
import Stock from "@/components/database/model/Stock";

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const data = ref([
  new Stock(0, "Vélo A", 5, 5),
  new Stock(1, "Cadre", 50, 0),
  new Stock(2, "Guidon", 1, 5),
  new Stock(3, "Selle", 10, 150),
  new Stock(4, "Chaine", 52, 525),
  new Stock(5, "Pédales", 0, 39),
]);
</script>

<template>
  <div style="display: flex; flex-direction: column; justify-content: space-evenly; padding: 2em">
    <div style="display: flex; flex-direction: row; flex: auto">
      <h2 style="flex: 1">Vision des stocks</h2>
      <button>Commander</button>
    </div>

    <table id="customers" style="flex: 1; margin-top: 3em">
      <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Quantité actuel</th>
        <th>Quantité à prévoir</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data">
        <td>{{ item.id}}</td>
        <td>{{ item.nom }}</td>
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