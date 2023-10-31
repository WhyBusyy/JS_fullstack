//class declaration = 객체선언(정의)
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.all = make + " " + model;
    }

    drive() {
        return `${this.all}가 운전 중입니다.`
    }

    stop() {
        return `${this.all}가 정지 중입니다.`
    }

    fire() {
        return `${this.all}가 불타는 중입니다.`
    }
}

const myCar = new Car('KIA', "K3");
const yourCar = new Car('Tesla', "Model3");

console.log(myCar.make);
console.log(myCar.drive());
console.log(myCar.stop());
console.log(myCar.fire());

console.log(yourCar.make);
console.log(yourCar.drive());
console.log(yourCar.stop());
console.log(yourCar.fire());
