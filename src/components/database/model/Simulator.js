import {name} from "jsdom/lib/jsdom/living/helpers/validate-names";

class Simulator {
    name;
    quantity;
    time;


    constructor(name, quantity, time) {
        this.name = name;
        this.quantity = quantity;
        this.time = time;
    }
}
export default Simulator