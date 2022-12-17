function solve(arr) {
    let result = "";

    for (let index = 0; index < arr.length; index += 2) {
     result += arr[index];
     result += " ";
    }
    console.log(result);
}

solve(['20', '30', '40','50', '60'])