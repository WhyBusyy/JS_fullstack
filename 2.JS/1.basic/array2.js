let array1 = [1,2,3];
const array2 = [4,5,6];

console.log(array1[0]);
console.log(array2[0]);

array1.push(7);
console.log(array1);
array1.pop(); // 마지막 요소를 없앰
console.log(array1);


let newArray1 = array1.slice(1,3); // 2번째 요소부터 4번째요소 이전까지 복제
console.log(newArray1);
console.log(array1);


array1.splice(1,2); // 1- 2번째 요소부터, 2-2개 ; 제거하고 원본 유지
console.log(array1);

const array3 = array1.concat(array2); //concatinate // array1에다가 array2를 합침
console.log(array3);

//spread 문법 (spread 연산자)
const array4 = [...array1, ...array2]; // ... = 배열을 풀어내라
console.log(array4);

array1 = [1,2,3];

console.log(array1);
console.log(array2);

array1.splice(1, 0,  ...array2); // 2번째 요소부터 0개를 자르고 array2를 풀어내라
console.log(array1);
