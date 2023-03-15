function solve(arr) {
    let obj = {};

    for (let index = 0; index < arr.length; index+=2) {
        let  product = arr[index];
        let calories = arr[index +1];
        obj[product] = +calories;
    }
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138','Apple', '52'])