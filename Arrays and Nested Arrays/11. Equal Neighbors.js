function solve(matrix) {
  let counter = 0;

  //check rows
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
      if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
        counter++;
      }
    }
  }
  let rowSize = matrix[0].length;

  // chek columns
  for (let colIndex = 0; colIndex < rowSize; colIndex++) {
    for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
      if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
        counter++;
      }
    }
  }
  console.log(counter);
}

solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);