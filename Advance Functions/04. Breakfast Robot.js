function solve() {
  let recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10
    },
  };

  let stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
  };

  let commands = {
    restock,
    prepare,
    report
  };

  return manager;

  function manager(line) {
    let [command, param, qty] = line.split(" ");
    let fn = commands[command];
    return fn(param, qty);
  }

  function restock(type, qty) {
    stock[type] += Number(qty);
    return "Success";
  }

  function prepare(recipeAsString, qty) {
    qty = Number(qty);
    // find recipe
    let recipe = Object.entries(recipes[recipeAsString]);

    // calculate total ingredient qty
    recipe.forEach((ingredient) => (ingredient[1] *= qty));

    // compare one by one with stock
    for (let [ingredient, required] of recipe) {
      if (stock[ingredient] < required) {
        // if on is insufficient -> return error
        return `Error: not enough ${ingredient} in stock`;
      }
    }
    // otherwise , subtract qty from stock and return success
    recipe.forEach(([ingredient, required]) => (stock[ingredient] -= required));
    return `Success`;
  }

  function report() {
    return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
  }
}

let manager = solve();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
