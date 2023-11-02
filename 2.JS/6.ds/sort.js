const array = Array.from({length: 100}, () => Math.floor(Math.random()*100));

function selectionSort(arr) {
    const length = arr.length;
    for(let i = 0; i < length -1; i++) {
        let minIndex = i;
        //i부터 배열 끝까지 최소값을 찾음;
        for(let j = i+1; j < length; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        //최솟값을 현재 위치로 교환
        if(minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log('정렬 전:', array);
const sortedArray = selectionSort(array);
console.time('sortedArray');
console.log('정렬 후:', sortedArray);
console.timeEnd('sortedArray');
