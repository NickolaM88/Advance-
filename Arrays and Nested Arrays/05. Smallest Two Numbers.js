function solve(nums) {
    let result =[];
    nums.sort((a, b) => a - b)
   let [first, second] = nums;
   result.push(first, second);
   
    console.log(result.join(" "));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);