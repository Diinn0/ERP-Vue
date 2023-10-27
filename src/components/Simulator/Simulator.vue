<script setup>
import {ref} from "vue";
import { storeToRefs } from 'pinia'
import {usePieceList} from "@/stores/managePieceList";
import Model from "@/components/database/model/Model";
import Piece from "@/components/database/model/Piece";
import Simulator from "@/components/database/model/Simulator";
import PieceLine from "@/components/database/model/PieceLine";

const pieceStore = usePieceList()
pieceStore.pieceList = []
const { pieceList } = storeToRefs(pieceStore)

const data = ref([
  new Model(0, "Vélo A",  5, 5),
  new Model(1, "Vélo VTT",  10, 140),
  new Model(2, "Vélo BAP",  40, 20)
]);

const simulator = ref(
    new Simulator(
        "Non renseigné",
        "Non renseigné",
        "Non renseigné",
    )
)

let { name, quantity, time } = simulator.value

const submit = () => {
  pieceStore.pieceList = []
  document.getElementById("recapPiece").style.visibility = "visible"
  let modelInput = document.getElementById("modelRequest").value
  let quantityInput = document.getElementById("quantityRequest").value

  time = 0

  name = modelInput
  quantity = quantityInput

  let pieceData = Piece.getPieceData()
  for(let i = 0; i < pieceData.length; i++) {
    let piece = pieceData[i];
    let quantityPiece = i;

    let pieceline = new PieceLine(piece, quantityPiece);

    time += piece.time * quantityPiece

    pieceStore.pieceList.push(pieceline)
  }

  let minutes = time * quantity
  let hours = Math.floor(minutes/60)
  let days = Math.floor(hours/24)

  let estimedTime = ""
  if(days > 0) {
    estimedTime += `${days} jours `;
  }
  if(hours > 0) {
    if (days > 1) {
      hours -= days * 24
    }
    estimedTime += `${hours} heures `;
  }
  if( hours > 1) {
    minutes -= 60 * (minutes/60)
  }
  estimedTime += `${minutes} minutes `

  time = estimedTime
}

</script>

<template>
  <div style="display: flex; flex-direction: column; justify-content: space-evenly; padding: 2em">
    <div style="display: flex; flex-direction: row; flex: auto">
      <h2 style="flex: 1">Simulation d'une commande</h2>
    </div>

    <div>
      <div>
        <label for="modelRequest">Modèle souhaité: </label>
        <br>
        <select id="modelRequest">
          <option v-for="item in data" :value="item.nom">{{item.nom}}</option>
        </select>
      </div>

      <div>
        <label for="quantityRequest">Quantité souhaité: </label>
        <br>
        <input type="number" id="quantityRequest" value="1">
      </div>

      <br>

      <button type="button" @click="submit ">Lancer la simulation</button>
    </div>

    <div id="simulator_result">
      <br>
      <br>

      <h2>Résultat de la simulation</h2>

      <br>

      <div>
        <p>Nom du modèle: {{ name }}</p>

        <p>Quantité souhaité: {{ quantity }}</p>

        <p>Temps estimé: {{ time }}</p>

        <br>

        <div id="recapPiece" style="visibility: hidden">
          <h4>Récapitulatif des pièces</h4>
          <br>

          <table id="customers" style="flex: 1;">
            <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Poids</th>
              <th>Largeur</th>
              <th>Longeur</th>
              <th>Durée</th>
              <th>Quantité/unité</th>
              <th>Quantité total</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in pieceList">
              <td>{{ item.piece.id }}</td>
              <td>{{ item.piece.name }}</td>
              <td>{{ item.piece.weight }}</td>
              <td>{{ item.piece.width }}</td>
              <td>{{ item.piece.length }}</td>
              <td>{{ item.piece.time }}</td>
              <td>{{item.quantity}}</td>
              <td>{{item.quantity * quantity}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
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