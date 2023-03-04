function solve(num, ...params) {
  let number = Number(num);
  let chop = (x) => x / 2;
  let dice = (x) => Math.sqrt(x);
  let spice = (x) => ++x;
  let bake = (x) => x * 3;
  let fillet = (x) => x - x * 0.2;

  for (let index = 0; index < params.length; index++) {
    switch (params[index]) {
      case "chop":
        number = chop(number);
        console.log(number);
        break;
      case "dice":
        number = dice(number);
        console.log(number);
        break;
      case "spice":
        number = spice(number);
        console.log(number);
        break;
      case "bake":
        number = bake(number);
        console.log(number);
        break;
      case "fillet":
        number = fillet(number);
        console.log(number);
      default:
        break;
    }
  }
}
solve('9', 'dice', 'spice', 'chop', 'bake','fillet');
