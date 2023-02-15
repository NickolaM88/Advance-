function solve(arr1, arr2, arr3) {
    let length1 = arr1.length;
    let length2 = arr2.length;
    let length3 = arr3.length;
    let totalLength = length1 + length2 + length3;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}