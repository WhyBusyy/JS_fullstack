const Person = require("./Person");

// Customer 객체 생성 및 활용
class Customer extends Person {
  constructor(name, age, gender, serialNumber, order) {
    super(name, age, gender);
    this.serialNumber = serialNumber;
    this.order = order;
  }
  placeOrder() {
    console.log(`${this.name} 고객이 ${this.order}을(를) 완료했습니다.`);
  }
}

module.exports = Customer;
