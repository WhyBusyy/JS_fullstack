const minNumber = Math.min(10, 20, 30, 40, 5, 7, 3);
console.log(minNumber);

const numbers1 = [10, 20, 30, 40, 5, 7, 3, -1, -2, 100, 101, 7007, -0.2];
function min_numbers(nums) {
    let num = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < num) {
            num = nums[i]
        }
    }
    return num;
}
min_num = min_numbers(numbers1);
console.log(min_num);