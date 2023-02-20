function solve(fruit,weightrInGrams,pricePerKg) {
    let kg = weightrInGrams / 1000;
    let price = kg * pricePerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}