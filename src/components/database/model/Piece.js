import {ref} from "vue";

class Piece {
    constructor(
        id,
        name,
        weight,
        width,
        lenght,
        time
    ) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.width = width;
        this.length = lenght;
        this.time = time
    }

    static getPieceData() {
        return [
            new Piece(0, "Cadre", 50, 2, 5, 50),
            new Piece(1, "Frein à disque", 50, 2, 5, 50),
            new Piece(2, "Guidon", 50, 2, 5, 50),
            new Piece(3, "Selle", 50, 2, 5, 50),
            new Piece(4, "Pédales", 50, 2, 5, 50),
            new Piece(5, "Chaine", 50, 2, 5, 50),
        ]
    }
}
export default Piece