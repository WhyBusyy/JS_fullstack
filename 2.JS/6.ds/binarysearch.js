function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length -1;

    while ( left <= right) {
        const mid = Math.floor((left + right)/2); //중간값 계산

        if(arr[mid] === target) {
            return mid; //결과를 찾았음
        } else if(arr[mid] < target) {
            left = mid + 1; //중간 값보다 타겟이 크면? 중간에서 출발
        } else {
            right = mid - 1; // 중간값보다 타켁이 작으면? 중간이 끝
        }
    }
    return -1; //요소 없음
}

const sortedArray = [1,3,4,5,7,8,9,10];
const unsortedArray = [1,8,3,4,5,11,7,100,8,9,10]; // 바이너리서치 방식으로는 찾을 수 없음 >> sort 후 서치

const target = 3;
const result = binarySearch(sortedArray, target);
console.log('결과:', result);