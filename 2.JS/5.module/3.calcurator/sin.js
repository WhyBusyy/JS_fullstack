import Operator from "./calculator.js";

export class Sin1 extends Operator {
    constructor(a,b) {
        super(a,b);
    }
    sin() {
        return Math.sin(this.a / this.b);
    }
}