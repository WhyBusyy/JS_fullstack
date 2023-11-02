const array = Array.from({length: 1000}, () => Math.floor(Math.random()*1000));

//인덱스의 출발은 1부터 한다고 가정
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i + 1;; // 찾는 요소의 인덱스 반환
        }
    }
    return -1; //d 요소를 찾지 못한 경우 -1을 반환
}
console.log(array);
console.time("linearSearch");
console.log(linearSearch(array, 5));
console.timeEnd("linearSearch");