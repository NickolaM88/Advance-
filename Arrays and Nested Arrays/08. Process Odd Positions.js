function solve(nums) {
  let odd = nums.filter((x,i) => i % 2);
  let doubled = odd.map(x => x * 2);
  doubled.reverse();

  console.log(doubled.join(' '));
}

solve([10, 15, 20, 25])