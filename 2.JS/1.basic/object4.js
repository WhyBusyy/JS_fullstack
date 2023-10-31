// 객체(오브젝트) 리터럴
let car = { make: "KIA", model: "K3" }

console.log(car.make);
console.log(car.model);

console.log('make' in car); // true
console.log('year' in car); // false

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let mycar = new Car("KIA", "K3")
console.log(mycar);
console.log(mycar.make);
console.log(mycar.model);

let mycar1 = new Car("KIA", "스포티지")
let mycar2 = new Car("KIA", "셀토스")
let mycar3 = new Car("KIA", "K5")
let mycar4 = new Car("KIA", "K7")