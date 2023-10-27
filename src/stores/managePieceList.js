import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePieceList = defineStore('pieceList', {
    state: () => ({
        pieceList: [],
    }),
    actions: {
        addPiece(item) {
            this.pieceList.push(item)
            console.log(this.pieceList)
        },

        removePiece(item) {
            this.pieceList = this.pieceList.filter((object) => {
                return object.piece.id !== item.piece.id;
            });
            console.log(this.pieceList)
        },
    },
})