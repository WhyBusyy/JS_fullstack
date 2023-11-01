const numbers = [0,1,11,22,2,3,-3,4,44,5,66,6,7,8,9,10];

function search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num === numbers[i]) {
            return 'index:'+ i;
        }
    }
}

console.log(search(numbers, 2));