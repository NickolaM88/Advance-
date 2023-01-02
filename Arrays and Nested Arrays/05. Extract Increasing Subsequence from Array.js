function solve(array) {
    let result = [];
    let biggest = array[0];

    for (let index = 0; index < array.length; index++) {
        let currNum = array[index];
        if(currNum >= biggest) {
            result.push(currNum);
            biggest = currNum;
        }
    }
    return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])