function solve(nums) {
    nums.sort((a, b) => a - b)
    let result = [];

    for (let index = Math.floor(nums.length / 2); index < nums.length; index++) {
        result.push(nums[index]);
    }
    return result;
}

console.log(solve([4,7,2,5]));