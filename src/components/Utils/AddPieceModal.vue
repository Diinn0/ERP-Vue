<script setup>
import { VueFinalModal } from 'vue-final-modal'
import Piece from '../database/model/Piece'
import { usePieceList } from '@/stores/managePieceList'
import PieceLine from "@/components/database/model/PieceLine";

defineProps({
  title : {
    type : String
  }
})

const emit = defineEmits(['confirm'])

const submit = () => {
  // Do something

  let pieceId = document.getElementById("piece").value
  let quantity = document.getElementById("quantity").value

  const pieceLine = new PieceLine(data[pieceId], quantity)

  usePieceList().addPiece(pieceLine)

  emit('confirm')
}

let data = Piece.getPieceData()

</script>

<template>
  <VueFinalModal
      class="flex justify-center items-center"
      content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
  >
    <h1 class="text-xl">
      {{ title }}
    </h1>

    <div>
      <label for="quantity">Quantité</label>
      <input id="quantity" type="number" value="1">
    </div>

    <div>
      <label for="piece">Pièce à ajouter :</label>
      <select id="piece">
        <option v-for="el in data" :value="el.id" >{{el.name}}</option>
      </select>
    </div>

    <button class="mt-1 ml-auto px-2 border rounded-lg" @click="submit">
      Confirm
    </button>
  </VueFinalModal>
</template>

<style scoped>

</style>