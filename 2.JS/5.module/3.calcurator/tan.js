import Operator from "./calculator.js";

export class Tan1 extends Operator {
    constructor(a,b) {
        super(a,b);
    }
    tan() {
        return Math.tan(this.a / this.b);
    }
}
