const array1 = [5, 7, 4, 6, 8, 9, 2, -1, -100, 100, 22];

array1.sort();
console.log(array1);

array1.sort((a, b) => a - b);
console.log(array1);

const array2 = [5, -7, 4, 6, -8, 9, 2, -1, -100, 10, 22];
function ascendingSort(arr) {
    const len = arr.length; // 1. arr의 길이를 변수로 설정
    for (let i = 0; i < len; i++) { // 3. 반복하여 배열 오름차순 정렬 완료
        for (let j = 0; j < len- i; j++) { // 2. 요소별 크기 비교 후 순서 변경
            if (arr[j] > arr[j + 1]) { // 2-1. j번째와 j+1번째 크기 비교
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; // 2-2. 비교 결과에 따라 순서 변경
            }
        }
    }
    return arr;
}
console.log(ascendingSort(array2));
