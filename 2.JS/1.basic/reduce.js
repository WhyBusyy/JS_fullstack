const numbers = [1,2,3,4,5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// reduce = 배열 내부의 값을 전부 더하는 메서드
console.log(sum);