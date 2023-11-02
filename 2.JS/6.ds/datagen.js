//랜덤으로 숫자 100개 만들기
const array = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
console.log(array);

//랜덤 숫자 100개 (중복없음)
const uniqeRandomNumbers = new Set(); // 중복 없는 객체,,
console.log(uniqeRandomNumbers);

while (uniqeRandomNumbers.size < 100) {
    uniqeRandomNumbers.add(Math.floor(Math.random() * 100));
}
console.log(uniqeRandomNumbers);

const array2 = Array.from(uniqeRandomNumbers);
console.log(array2);

//이걸 내가 구현하면..?
// let uniqeRandomNumbers2 = [];
// while (uniqeRandomNumbers2.length < 100) {
//     let randomNumber = Math.floor(Math.random() * 100) {
//         for(let i = 0; i < uniqeRandomNumbers2; i++){
//         }
//     }
// }  덜 작성되긴 했는데,, 아무튼 복잡해진다,,