const avg_numbers = [ 1, 2, 3, 4, 5, 6];

function calculateAverage(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0); // 배열의 합 구하기
    const avg = sum / arr.length; // 평균 계산
    return avg;
}

let avg_num = calculateAverage(avg_numbers);
console.log(avg_num);