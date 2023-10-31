// class expression
const Car = class {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive() {
        return `${this.make} ${this.model}가 운전 중입니다.`
    }
}

const myCar = new Car('KIA', "K3");
const yourCar = new Car('Tesla', "Model3");

console.log(myCar.make);
console.log(myCar.drive());
