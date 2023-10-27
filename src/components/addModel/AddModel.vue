<script setup>
import { toRaw } from 'vue'
import { storeToRefs } from 'pinia'
import {usePieceList} from "@/stores/managePieceList";

import { ModalsContainer, useModal } from 'vue-final-modal'
import AddPieceModal from '../Utils/AddPieceModal.vue'
const { open, close } = useModal({
  component: AddPieceModal,
  attrs: {
    title: 'Titre : Ajouter une pièce',
    onConfirm() {
      close()
    },
  },
  slots: {
    default: '<p>UseModal: The content of the modal</p>',
  },
})

const submit = (event) => {
  event.preventDefault()

  alert("Modèle ajouté")

  window.location.reload()
}

const deletePiece = (item) => {
  const rawItem = toRaw(item)
  usePieceList().removePiece(rawItem)
}

let piecesCount = 0;

const pieceStore = usePieceList()
const { pieceList } = storeToRefs(pieceStore)

piecesCount++;

</script>

<template>
  <div style="display: flex; flex-direction: column; justify-content: space-evenly; padding: 2em">
    <div style="display: flex; flex-direction: row; flex: auto">
      <h2 style="flex: 1">Ajout d'un modèle</h2>
    </div>
    <div style="display: flex; flex-direction: column; flex: auto">
      <form>

        <div>
          <label for="name">Nom du modèle : </label>
          <input type="text" id="name">
        </div>

        <br>
        <br>

        <div style="color: white">
          <VButton @click="open">
            Ajouter une pièce
          </VButton>
        </div>

        <table id="customers" style="flex: 1; margin-top: 3em">
          <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Poids</th>
            <th>Largeur</th>
            <th>Longeur</th>
            <th>Durée</th>
            <th>Quantité</th>
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
            <td>
              <button type="button" @click="deletePiece(item)">Supprimer</button>
            </td>
          </tr>
          </tbody>
        </table>

        <br>
        <br>

        <button style="background-color: limegreen" type="button" @click="(event) => submit(event)">Ajouter le modèle</button>

      </form>
    </div>

    <ModalsContainer />
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