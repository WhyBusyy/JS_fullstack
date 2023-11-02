//인덱스라는 모듈에서, add모듈의 함수를 불러와야함..
const {add2, add3} = require ('./add'); 

let sum = add2(2,3);
console.log('결과:', sum);

let sum1 = add3(2,3,5);
console.log('결과:', sum1);

