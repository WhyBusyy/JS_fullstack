import Operator from "./calculator.js";

export class Cos1 extends Operator {
    constructor(a, b) {
        super(a, b);
    }
    cos() {
        return Math.cos(this.a / this.b);
    }
}