function solve(list) {
  let info = {};

  for (const town of list) {
    let tokens = town.split(" <-> ");
    let name = tokens[0];
    let population = Number(tokens[1]);

    if (info[name] === undefined) {
      info[name] = population;
    } else {
      info[name] += population;
    }
  }
  for (const town in info) {
      console.log(`${town} : ${info[town]}`);
  }
}