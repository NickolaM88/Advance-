function solve(arr, type) {
  return arr.sort((a, b) => (type === "asc" ? a - b : b - a));
}

solve([14, 7, 17, 6, 8], "asc");
