// 1. Date
const today = Date();
console.log(today);

// const today = new Date();
// console.log(today);

// 2. Math
const maxNumber = Math.max(10, 20, 30, 5, 3, 1);
console.log(maxNumber);

const numbers = [10, 20, 30, 5, 3, 1, 40];
// 미션1. 가장 큰 숫자를 찾는 로직 구현
// for, if 두개의 문법을 사용해서

// 알고리즘..
// 1. 처음부터 끝까지 모든 숫자를 읽음 = (3)
// 2. 내가 알고 있는 큰 숫자보다 더 큰 숫자인지 확인한다 = (4)
// 3. ㄱ래서, 이 숫자가 작으면, 그냥 무시.. 더 크면 기억하는 숫자를 변환 = (5)
function max_numbers(nums) {
    // (1) 함수 설정
    let num = nums[0];
    // (2) 변수 num을 배열의 0번째로 할당
    for (let i = 1; i < nums.length; i++) {
        // (3) for 반복문 (i에 숫자 1을 할당; i가 파라미터의 길이가 될때까지; i를 1씩 증가)
        if (nums[i] > num) {
            // (4) 만약에 (파라미터의 i번째 요소가 변수num보다 크면)
            num = nums[i];
            // (5) 변수 num에 파라미터 i번쨰 요소를 할당
        }
    }
    return num;
// 이게 for 구문으로 만들어진 것이 ^ 위에 함수
 // 1.if 0번이 1번보다 크면 0번을 반환
 // 2.else if 반환된 값이 2번보다 크면 반환된 값을 반환
 // 3.else if 반환된 값이 3번보다 크면 반환된 값을 반환
 // 4.else if 반환된 값이 4번보다 크면 반환된 값을 반환
 // 5.else if 반환된 값이 5번보다 크면 반환된 값을 반환
}

max_num = max_numbers(numbers);
console.log(max_num);

// 3. String
const text = 'Hello, World!'