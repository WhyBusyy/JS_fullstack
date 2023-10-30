hello = "hello";

var hello = "hello";

let number = 1;
let number2 = 'hello';
let number3 = 3;

//1.객체생성
//객체 - 중괄호로 키밸류 형태로 감싼 데이터 유형
let person = { name: "Alice", age: 30, job: "Enggineer"};

let person2 = {
    name: "Alice",
    age: 30,
    job: "Engineer"
};

console.log(person2);

//2.객체접근
console.log(person2.name);
console.log(person2.age);
console.log(person2.job);

//3.속성 추가
person2.location = "Seoul";
console.log(person2);

//4.속성 변경
person2.age = 31;
console.log(person2);

//5.속성 삭제
delete person2.location;
console.log(person2);

let 한글변수 = "한글";
console.log(한글변수); // 한글변수 개발자들이 싫어함,,

//6.객체...함수도 추가
let car = {
    brand: "KIA",
    year: 2020,
    start: function() {
        return "Engineer Started"
    },
    stop: function() {
        return "Engineer Stopped"
    }
};

console.log(car);
console.log(car.start);
console.log(car.stop);
