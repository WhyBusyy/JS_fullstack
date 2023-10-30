//배열...(리스트) [mem1, mem2, mem3, ...]
//1. 배열 생성
const numbers2 = [1,2,3,4,5]; // NG
const numbers = [1, 2, 3, 4, 5] // GOOD
const fruits = ['Apple', 'Banana', 'Orange'];
const mixed = [1, '1', 2, '2', 3, '3'];

console.log(numbers);
console.log(fruits);
console.log(mixed);

//2. 배열 접근
console.log(numbers[0]); //배열 인덱스 0에서 시작
console.log(numbers[1]);
console.log(numbers[4]);
console.log(numbers[5]); // 인텍스 범위를 벗어난 상태..


//배열 안에 있는 넘버를 반복접근 = 이터레이터(iterator)
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
} // i = index 줄임

for (let i = 0;
    i < fruits.length;
    i++) {
    console.log(fruits[i])
}
// 모던언어들의 특징.. 직관적으로 접근 가능한 새로운 문법
// fruits.forEach(개별 멤버별로 수행할 기능을 함수로 정의)
// 익명함수 = 함수명이 없는 함수

fruits.forEach((fruit) => {
    console.log(fruit);
});

fruits.forEach(function(fruit) {
    console.log(fruit);
});

//3. 배열 수정
fruits[1] = 'Grapes';
console.log(fruits);

fruits.push('Tomato');
console.log(fruits);

newFruits = fruits.pop();
console.log(newFruits);
console.log(fruits);

const newNumbers = numbers.slice(1,3); // slice(index_start, index_end) 시작포함, 마지막 미포함
console.log(newNumbers);