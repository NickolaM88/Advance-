function solve(string) {
  let array = string.match(/\w+/g);
  let result = [];
  array.forEach((word) => result.push(word.toUpperCase()));
  console.log(result.join(", "));
}