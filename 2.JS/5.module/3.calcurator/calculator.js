export function add(a,b) {
    return a + b;
}

export function sub(a,b) {
    return a - b;
}

export function mul(a,b) {
    return a * b;
}

export function div(a,b) {
    return a / b;
}

// module.exports // node.js 초기부터 있던 방식(CommonJS)
// ES6부터 import,export 생김

export default class Operator {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

    add(a,b) {
        return a + b;
    }
    
    sub(a,b) {
        return a - b;
    }
    
    mul(a,b) {
        return a * b;
    }
    
    div(a,b) {
        return a / b;
    }
}