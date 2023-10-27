<script setup>
  import {ref} from "vue";
  import Order from "@/components/database/model/Order";
  import Model from "@/components/database/model/Model";

  const data = ref([
    new Model(0, "Vélo A",  5, 5),
    new Model(1, "Vélo VTT",  10, 140),
    new Model(2, "Vélo BAP",  40, 20)
  ]);
</script>

<template>
  <div style="display: flex; flex-direction: column; justify-content: space-evenly; padding: 2em">
    <div style="display: flex; flex-direction: row; flex: auto">
      <h2 style="flex: 1">Vision des modèles</h2>
      <button type="button">
        <a href="#/addModel">Ajout de modèle</a>
      </button>
    </div>

    <table id="customers" style="flex: 1; margin-top: 3em">
      <thead>
        <tr>
          <th>ID</th>
          <th>Modèle</th>
          <th>Nombre de modèle créés</th>
          <th>Nombre de modèle à produire</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data">
          <td>{{ item.id }}</td>
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